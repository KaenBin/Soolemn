import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { setAuthStatus, setAuthenticating } from "@/redux/actions/miscActions";

const AuthenticatingLoader = ({ authStatus, title }) => {
  return authStatus?.success ? (
    <Button
      className="authenticated"
      fullWidth
      variant="contained"
      color="primary"
      disabled
    >
      {authStatus.message}
    </Button>
  ) : (
    <Button className="authenticating" variant="contained" fullWidth disabled>
      <span />
      <span />
      <span />
      <span />
      {title}
    </Button>
  );
};

const AuthLoader = ({ authStatus, title }) => {
  const dispatch = useDispatch();

  const handleResetAuth = () => {
    dispatch(setAuthStatus(null));
    dispatch(setAuthenticating(false));
  };

  return authStatus && !authStatus.success ? (
    <Button
      onClick={handleResetAuth}
      className="error"
      fullWidth
      variant="outlined"
      color="error"
    >
      {authStatus.message + " Please try again?"}
    </Button>
  ) : (
    <Button
      type="submit"
      className="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      {title}
    </Button>
  );
};

export { AuthenticatingLoader, AuthLoader };
