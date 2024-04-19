import * as React from "react";
import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Typography } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from "@mui/icons-material/Circle";

import "react-multi-carousel/lib/styles.css";

const ListPagination = (props) => {
  const handleSetPage = (idx) => {
    props.setPage(idx);
  };

  const output = [];

  for (let i = 1; i <= props.totalPage; i++) {
    if (i == props.page)
      output.push(
        <IconButton key={i} onClick={() => handleSetPage(i)} size="small">
          <AdjustIcon color="button" />
        </IconButton>
      );
    else
      output.push(
        <IconButton key={i} onClick={() => handleSetPage(i)} size="small">
          <CircleIcon color="button.light" />
        </IconButton>
      );
  }

  return (
    <Grid container spacing={2} display="flex" justifyContent="space-between">
      <Grid item>{output}</Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default ListPagination;
