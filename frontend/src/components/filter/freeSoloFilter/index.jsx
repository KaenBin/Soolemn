import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";

export default function FreeSoloFilter(props) {
  const classes = useStyles();

  return (
    <Autocomplete
      freeSolo
      size="small"
      id="free-solo"
      disableClearable
      options={props.list.map((option) => option.value)}
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      onInputChange={(event, newValue) => {
        props.setValue(newValue);
      }}
      sx={{ width: "10vw" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.type}
          InputProps={{
            ...params.InputProps,
            classes: {
              root: classes.inputRoot,
            },
            type: "input",
          }}
        />
      )}
      forcePopupIcon
    />
  );
}

const useStyles = makeStyles({
  inputRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: "solid",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: "solid",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: "solid",
    },
  },
});
