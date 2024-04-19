import React from "react";
import { green, red, blue } from "@mui/material/colors";
import { ColorList } from "../ColorList";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function ChooseColor(prop) {
  const Colors = ColorList;
  const colorChoosen = prop.row.color;
  function handleColor(color, id) {
    prop.handleColorChange(id, color);
  }
  return (
    <Box sx={{display:"flex"}}>
      {Colors.map((color, index) => (
        <Box key={index} >
          {colorChoosen != color ? (
            <Brightness1RoundedIcon
              sx={{ color: { color } }}
              value={color}
              key={index}
              onClick={() => handleColor(color, prop.row.product_id)}
            />
          ) : (
            <AdjustRoundedIcon key={index} sx={{ color: { color } }} />
          )}
        </Box>
      ))}
      {/* <AdjustRoundedIcon sx={{ color: blue[500] }} />
      <Brightness1RoundedIcon color="success" /> */}
    </Box>
  );
}
