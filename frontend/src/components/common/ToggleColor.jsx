import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const color = [
  { id: "1", color: "black" },
  { id: "2", color: "red" },
  { id: "3", color: "green" },
  { id: "4", color: "yellow" },
];

export default function ToggleColor() {
  const [alignment, setAlignment] = React.useState(color[0]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {color.map((value) => {
        return (
          <ToggleButton
            key={value.id}
            value={value.color}
            sx={{
              "&.MuiToggleButton-root": {
                margin: 0.25,
                borderRadius: "50%",
                backgroundColor: value.color,
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
}
