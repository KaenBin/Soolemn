import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleColor = ({ colorOptions, selectedColor, handleChangeColor }) => {
  // const [alignment, setAlignment] = React.useState(color[0]);

  const handleChange = (event, newAlignment) => {
    handleChangeColor(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectedColor}
      exclusive
      onChange={handleChange}
      aria-label="Color"
    >
      {colorOptions.map((option) => {
        return (
          <ToggleButton
            key={option}
            value={option}
            sx={{
              "&.MuiToggleButton-root": {
                margin: 0.25,
                borderRadius: "50%",
                backgroundColor: option,
                border: "solid",
                borderColor: "#ffffff",
              },
              "&.Mui-selected": {
                borderColor: "#ACACAC",
              },
            }}
          />
        );
      })}
    </ToggleButtonGroup>
  );
};

export default ToggleColor;
