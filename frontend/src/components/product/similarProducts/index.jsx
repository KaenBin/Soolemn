import * as React from "react";
import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

import "react-multi-carousel/lib/styles.css";
import { ProductContainer } from "@/components/product";
import ProductList from "../productList";
import { ListPagination } from "@/components/pagination";

const SimilarProducts = (props) => {
  const [page, setPage] = React.useState(props.list.length ? 1 : 0);

  const output = [];

  for (let i = 0; i < props.block / 3; i++) {
    output.push(
      <Grid item>
        <ProductList
          list={props.list.slice((page - 1 + i) * 3, (page - 1 + i) * 3 + 3)}
          size="small"
        />
      </Grid>
    );
  }
  return (
    <Grid container flexDirection="column" display="flex">
      {output}
    </Grid>
  );
};

export default SimilarProducts;
