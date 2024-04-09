import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Unstable_Grid2";

import { setAuthenticating } from "@/redux/actions/miscActions";
// import mock_product from "@/mockdata/products";
// import { ProductGroup } from "@/components/product";

export default function Cart() {
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
        <p>This is the Cart Page</p>
      </div>
    </main>
  );
}
