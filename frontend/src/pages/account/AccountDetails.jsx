import { TextField } from "@mui/material";
import { ColorButton } from "@/components/styled";
import { useForm } from "react-hook-form";
import {
  addressValidation,
  emailValidation,
  passwordValidation,
  usernameValidation,
  fullNameValidation,
} from "@/constants/validateSchema";

export default function AccountDetails({ profile }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
      <TextField
        required
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        defaultValue={profile.fullname}
        autoComplete="fullname"
        autoFocus
        error={!!errors?.fullname}
        helperText={errors?.fullname ? errors.fullname.message : ""}
        InputLabelProps={{ shrink: true }}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("fullname", fullNameValidation)}
      />
      <TextField
        required
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        defaultValue={profile.username}
        autoComplete="email"
        autoFocus
        error={!!errors?.username}
        helperText={errors?.username ? errors.username.message : ""}
        InputLabelProps={{ shrink: true }}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("username", usernameValidation)}
      />
      <TextField
        required
        id="outlined-basic"
        label="Email"
        defaultValue={profile.email}
        variant="outlined"
        autoComplete="email"
        autoFocus
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : ""}
        InputLabelProps={{ shrink: true }}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("email", emailValidation)}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        placeholder="Address not set... Add an address."
        defaultValue={profile.address}
        variant="outlined"
        autoComplete="address"
        autoFocus
        error={!!errors?.address}
        helperText={errors?.address ? errors.address.message : ""}
        InputLabelProps={{ shrink: true }}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("address", addressValidation)}
      />
      <h3>Password</h3>
      <TextField
        id="outlined-basic"
        label="Old Password"
        variant="outlined"
        type="password"
        autoComplete="password"
        autoFocus
        error={!!errors?.password}
        helperText={errors?.password ? errors.password.message : ""}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("password", passwordValidation)}
      />
      <TextField
        id="outlined-basic"
        label="New Password"
        variant="outlined"
        type="password"
        autoComplete="newPassword"
        autoFocus
        error={!!errors?.newPassword}
        helperText={errors?.newPassword ? errors.newPassword.message : ""}
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("newPassword", passwordValidation)}
      />
      <TextField
        id="outlined-basic"
        label="Repeat New Password"
        variant="outlined"
        type="password"
        autoComplete="repeatNewPassword"
        autoFocus
        error={!!errors?.repeatNewPassword}
        helperText={
          errors?.repeatNewPassword ? errors.repeatNewPassword.message : ""
        }
        sx={{ width: "100%", marginBottom: "3%" }}
        {...register("repeatNewPassword", passwordValidation)}
      />
      <ColorButton
        type="submit"
        variant="contained"
        color="primary"
        sx={{ padding: "15px 40px", borderRadius: "10px" }}
      >
        Save Changes
      </ColorButton>
    </form>
  );
}
