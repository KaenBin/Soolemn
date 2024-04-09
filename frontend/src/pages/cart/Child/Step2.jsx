import React from 'react'
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import FullForm from './Step2/FullForm';

function Step2() {
  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <FullForm/>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ width: "90%", border: "1px solid black", borderRadius: 2 }}
            >
                order sum
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Step2
