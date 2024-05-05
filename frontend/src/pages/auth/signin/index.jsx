import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn } from "@/redux/actions/authActions";
import { setAuthStatus, setAuthenticating } from "@/redux/actions/miscActions";
import {
  emailValidation,
  passwordValidation,
} from "@/constants/validateSchema";
import {
  AuthLoader,
  AuthenticatingLoader,
} from "@/components/button/authLoader";

export default function Signin() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  console.log(app);

  useEffect(
    () => () => {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    },
    []
  );
  return (
    <main className="auth">
      <Container component="main" maxWidth="xs" className="login-box">
        <Typography component="h1" variant="h4">
          Sign In
        </Typography>
        <form
          noValidate
          onSubmit={handleSubmit((data) => dispatch(signIn(data)))}
        >
          <TextField
            className="user-box"
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : ""}
            {...register("email", emailValidation)}
          />
          <TextField
            className="user-box"
            variant="standard"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : ""}
            {...register("password", passwordValidation)}
          />
          <Grid className="spacing" container alignItems="center">
            <Grid xs>
              <FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="remember"
                    color="primary"
                    defaultValue={false}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={onChange}
                        checked={value}
                        inputRef={ref}
                      />
                    )}
                  />
                }
                label="Remember me"
              />
            </Grid>
            <Grid>
              <Link href="#" variant="body1" underline="none">
                <Box fontWeight="bold" display="inline">
                  Forgot password?
                </Box>
              </Link>
            </Grid>
          </Grid>
          Don't have an account yet?{" "}
          <Link
            onClick={() => navigate("/signup")}
            component="button"
            type="button"
            className="redirect"
            variant="body1"
            underline="none"
          >
            Sign Up
          </Link>
          {app?.authenticating ? (
            <AuthenticatingLoader
              authStatus={app.authStatus}
              title="SIGNING IN..."
            />
          ) : (
            <AuthLoader authStatus={app.authStatus} title="SIGN IN" />
          )}
        </form>
      </Container>
    </main>
  );
}
