import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { setAuthenticating } from "@/redux/actions/miscActions";
import mock_product from "@/mockdata/products";
import { ProductGroup } from "@/components/product";
import apiInstance from "@/services/apiService";

export default function Home() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  console.log(store);

  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <Grid container minHeight={160} direction="column" spacing={5}>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup title="Newest" list={store.items} block={4} />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup title="Exclusive deal" list={store.items} block={4} />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup title="Popular" list={store.items} block={8} />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup
              title="Recommended for you"
              list={store.items}
              block={8}
            />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
