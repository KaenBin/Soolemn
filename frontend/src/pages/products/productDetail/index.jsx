import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { Pagination, Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { setAuthenticating } from "@/redux/actions/miscActions";
import { ProductGroup, ProductGroup2 } from "@/components/product";
import mock_product from "@/mockdata/products";
import { NavLink, Navigate } from "react-router-dom";
import { ProductImage } from "@/components/product";

export default function ProductDetail(props) {
  const dispatch = useDispatch();

  const breadcrumbs = [
    <NavLink
      onClick={() => window.history.back()}
      key="1"
      style={{ textDecoration: "none", color: "#605F5F" }}
      variant="secondary"
    >
      Products
    </NavLink>,
    <Typography key="2" variant="subBreadCumbs">
      Category{" "}
    </Typography>,
    <Typography key="3" variant="breadCumbs">
      Product Detail
    </Typography>,
  ];

  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Grid
          container
          minHeight={160}
          display="flex"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            container
            minHeight={160}
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <ProductImage item={mock_product[0]} />
          </Grid>
          <Grid
            container
            minHeight={160}
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            Hi
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
