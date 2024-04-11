import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import { setAuthenticating } from "@/redux/actions/miscActions";
import mock_product from "@/mockdata/products";
import { ProductGroup } from "@/components/product";

export default function Home() {
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
        <Grid container minHeight={160} direction="column" spacing={5}>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup title="Newest" list={mock_product} block={4} />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup
              title="Exclusive deal"
              list={mock_product}
              block={4}
            />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup title="Popular" list={mock_product} block={8} />
          </Grid>
          <Grid
            marginTop={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ProductGroup
              title="Recommended for you"
              list={mock_product}
              block={8}
            />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
