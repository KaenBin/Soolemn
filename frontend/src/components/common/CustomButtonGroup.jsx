import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, Typography } from "@mui/material";

export default function CustomButtonGroup() {
  const [count, setCount] = React.useState(1);

  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Typography variant="h6">{count}</Typography>
      <Button
        onClick={() => {
          if (count != 0) setCount(count - 1);
        }}
      >
        -
      </Button>
    </ButtonGroup>
  );
}
