import { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "@/redux/actions/authActions";
import { setAuthStatus, setAuthenticating } from "@/redux/actions/miscActions";
import {
  fullNameValidation,
  usernameValidation,
  passwordValidation,
  emailValidation,
  policyValidation,
} from "@/constants/validateSchema";
import {
  AuthLoader,
  AuthenticatingLoader,
} from "@/components/button/authLoader";

export default function Signup() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  console.log(errors);
  useEffect(
    () => () => {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="auth">
      <Container component="div" maxWidth="xs" className="login-box">
        <Typography component="h1" variant="h4">
          Sign Up
        </Typography>
        <form
          noValidate
          onSubmit={handleSubmit((data) => dispatch(signUp(data)))}
        >
          <TextField
            className="user-box"
            variant="standard"
            required
            fullWidth
            id="fullname"
            label="Full Name"
            autoComplete="fullname"
            autoFocus
            error={!!errors?.fullname}
            helperText={errors?.fullname ? errors.fullname.message : ""}
            {...register("fullname", fullNameValidation)}
          />
          <TextField
            className="user-box"
            variant="standard"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="username"
            autoFocus
            error={!!errors?.username}
            helperText={errors?.username ? errors.username.message : ""}
            {...register("username", usernameValidation)}
          />
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
          Already have an account?{" "}
          <Link
            onClick={() => navigate("/signin")}
            className="redirect"
            component="button"
            type="button"
            variant="body1"
            underline="none"
          >
            {" "}
            Sign In
          </Link>
          <Box m={1} />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="policy"
                color="primary"
                defaultValue={false}
                rules={policyValidation}
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
            label={
              <Typography fontSize="0.9rem">
                I agree with
                <Link
                  href="#privacy"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  underline="none"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
                and
                <Link
                  href="#terms"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  underline="none"
                >
                  {" "}
                  Terms of Use
                </Link>
              </Typography>
            }
          />
          {errors?.policy ? (
            <FormHelperText error={!!errors?.policy}>
              {errors.policy.message}
            </FormHelperText>
          ) : (
            <></>
          )}
          {app?.authenticating ? (
            <AuthenticatingLoader
              authStatus={app.authStatus}
              title="SIGNING UP..."
            />
          ) : (
            <AuthLoader authStatus={app.authStatus} title="SIGN UP" />
          )}
        </form>
      </Container>
    </main>
  );
}
