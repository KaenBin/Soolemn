import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

import { ShippingOptions } from "@/constants/shipping";
import { ColorButton } from "@/components/styled";

export default function ProductDelivery() {
  const [shippingOptions, setShippingOptions] = useState([false, false, false]);

  const handleOptionClick = (index) => {
    const newOptions = shippingOptions.map((c, i) => {
      if (i === index) {
        return !c;
      } else {
        return c;
      }
    });
    setShippingOptions(newOptions);
  };

  return (
    <Box
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      borderRadius={3}
    >
      <Stack display="flex" direction="row" gap={2}>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            WEIGHT
          </FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end" sx={{ fontSize: 20 }}>
                kg
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            LENGTH
          </FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end" sx={{ fontSize: 20 }}>
                cm
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            WIDTH
          </FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end" sx={{ fontSize: 20 }}>
                cm
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <FormHelperText
            id="outlined-weight-helper-text"
            sx={{ fontSize: "16px", fontWeight: "bold", color: "#6C7275" }}
          >
            HEIGHT
          </FormHelperText>
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end" sx={{ fontSize: 20 }}>
                cm
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
      </Stack>
      <Stack display="flex" gap={2} width="100%">
        <Typography
          sx={{
            color: "#6C7275",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "5% 0% 0% 2%",
          }}
        >
          SHIPPING OPTIONS
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "0%" }}>
          <Table>
            {ShippingOptions.map((option, index) => (
              <TableBody key={option.name}>
                <TableRow
                  style={{
                    backgroundColor: "rgba(208, 208, 208, 0.25)",
                  }}
                >
                  <TableCell
                    colSpan={3}
                    style={{
                      color: "#6C7275",
                      fontSize: "14px",
                    }}
                  >
                    {option.name}
                  </TableCell>
                </TableRow>
                <TableRow style={{ backgroundColor: "#FCFCFD" }}>
                  <TableCell
                    style={{
                      color: "#6C7275",
                      fontSize: "14px",
                    }}
                  >
                    {option.isPickUp ? "Self Pick Up" : "Third-Party Shipper"}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#6C7275",
                      fontSize: "14px",
                      width: "20px",
                      padding: 0,
                    }}
                  >
                    {"$" + (9.99 * option.priceFactor).toFixed(2)}
                  </TableCell>
                  <TableCell
                    style={{
                      width: "20px",
                      height: "20px",
                      padding: "0px 20px 0px 20px",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleOptionClick(index)}
                    >
                      {shippingOptions[index] ? (
                        <CheckCircleIcon
                          sx={{
                            color: "#45B26B",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      ) : (
                        <CancelIcon
                          sx={{
                            color: "#FF0000",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
        <ColorButton
          variant="contained"
          style={{ height: "50px", borderRadius: "10px", marginTop: "20px" }}
        >
          Submit
        </ColorButton>
      </Stack>
    </Box>
  );
}
