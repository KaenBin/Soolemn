import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticating } from "@/redux/actions/miscActions";

export default function Categories() {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <p>This is the Categories Page</p>
      </div>
    </main>
  );
}
