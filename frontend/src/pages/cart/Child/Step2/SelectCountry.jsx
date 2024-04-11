import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { CountryList } from "../CountryDatabase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "100%",
    margin: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function SelectCountry(prop) {

  return (
    <div>
      <>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{ marginLeft: "1%" }}
          >
            <Typography fontFamily="" variant="h6" gutterBottom>
              Country
            </Typography>
          </InputLabel>
          <Select
            value={prop.shippingAddress.country}
            onChange={(e) => prop.handleShipping(e, "country")}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>Country</em>
            </MenuItem>
            {CountryList.map((comp,index)=><MenuItem key={ index} value={comp}>{comp}</MenuItem>)}
          </Select>
        </FormControl>
      </>
    </div>
  );
}

export default SelectCountry;
