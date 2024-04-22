import * as React from "react";
import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";

import "react-multi-carousel/lib/styles.css";
import { ProductContainer } from "@/components/product";
import ProductList from "../productList";
import { ListPagination } from "@/components/pagination";

const ProductGroup = (props) => {
  const [page, setPage] = React.useState(props.list.length ? 1 : 0);

  const output = [];

  for (let i = 0; i < props.block / 4; i++) {
    output.push(
      <Grid key={i}>
        <ProductList
          index={i}
          list={props.list.slice((page - 1 + i) * 4, (page - 1 + i) * 4 + 4)}
        />
      </Grid>
    );
  }
  return (
    <Box width="90vw">
      <Grid container flexDirection="column" display="flex" spacing={5}>
        <Grid flexDirection="row" display="flex" justifyContent="space-between">
          <Grid>
            <Typography variant="title">{props.title}</Typography>
          </Grid>
          <Grid>
            <ListPagination page={page} setPage={setPage} totalPage={3} />
          </Grid>
        </Grid>
        {output}
      </Grid>
    </Box>
  );
};

export default ProductGroup;
