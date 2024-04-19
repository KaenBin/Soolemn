import React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { products } from "../ProductDataBase";
import "../../cart.css";
import ChooseColor from "./ChooseColor";
function ProDuctView(props) {
  console.log(props)
  const { row } = props;
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={5}>
            <img src={row.image} alt="Logo" />
          </Grid>
          <Grid container item xs={7}>
            <Grid container item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography fontFamily="" variant="h6" gutterBottom>
                    {row.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography fontFamily="" variant="body1" gutterBottom>
                    Color: {row.color}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ChooseColor
                  row={row}
                  handleColorChange={props.handleColorChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProDuctView;
