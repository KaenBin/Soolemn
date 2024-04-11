import { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "@/redux/actions/authActions";
import { setAuthStatus, setAuthenticating } from "@/redux/actions/miscActions";

export default function Signup() {
  const { register, handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (form) => {
    dispatch(signUp(form));
  };

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
            {...register("fullname")}
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
            {...register("username")}
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
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
