import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/redux/actions/authActions";
import { setAuthStatus, setAuthenticating } from "@/redux/actions/miscActions";

export default function Signin() {
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    },
    []
  );
  return (
    <Container component="main" maxWidth="xs" className="login-box">
      <div>
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
            {...register("email")}
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
            {...register("password")}
          />
          <Grid className="spacing" container alignItems="center">
            <Grid item xs>
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
            <Grid item>
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
          <Button
            type="submit"
            className="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            <span />
            <span />
            <span />
            <span />
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
