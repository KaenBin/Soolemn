import React from "react";
import { green, red, blue } from "@mui/material/colors";
import { ColorList } from "../ColorList";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";

export default function ChooseColor(prop) {
  const Colors = ColorList;
  const colorChoosen=prop.row.product.productColor;
  function handleColor(color, id){
    prop.handleColorChange(id,color)
  }
  return (
    <div>
      {Colors.map((color, index) => (
        <>
        { colorChoosen != color?
          (<Brightness1RoundedIcon sx={{ color: { color } }} value={color} onClick={() =>handleColor(color, prop.row.id)} />):(
            <AdjustRoundedIcon sx={{ color: {color} }} />
          )
        }
        </>
      ))}
      {/* <AdjustRoundedIcon sx={{ color: blue[500] }} />
      <Brightness1RoundedIcon color="success" /> */}
    </div>
  );
}
