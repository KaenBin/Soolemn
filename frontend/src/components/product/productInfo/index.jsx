import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Popover,
  Button,
  CardActionArea,
  Container,
  IconButton,
  Rating,
  ButtonBase,
  Box,
  Divider,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import SwipeableViews from "react-swipeable-views";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { tableCellClasses } from "@mui/material/TableCell";
import StoreIcon from "@mui/icons-material/Store";
import InputAdornment from "@mui/material/InputAdornment";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import img from "@/assets/OIP.jpg";
import { StyledRating } from "@/utils/utils";
import { CustomCarousel } from "@/components/carousel";
import SimilarProducts from "../similarProducts";
import mock_product from "@/mockdata/products";
import { ToggleColor, CustomButtonGroup } from "@/components/common";
import { makePayment } from "@/redux/actions/profileActions";

const ProductInfo = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    setQuantity(Number(quantity + 1));
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(Number(quantity - 1));
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      border={2}
      borderColor="tertiary.main"
      borderRadius={5}
      p={2}
      sx={{
        width: 400,
        height: "80vh",
      }}
    >
      <TableContainer>
        <Table>
          <TableBody
            sx={{
              [`& .${tableCellClasses.root}`]: {
                border: "none",
              },
            }}
          >
            <TableRow>
              <TableCell
                rowSpan={2}
                align="center"
                style={{
                  padding: "0",
                }}
              >
                <StoreIcon style={{ width: "100px", height: "100px" }} />
              </TableCell>
              <TableCell style={{ padding: "0" }}>
                <Typography variant="price3">Name of the Shop</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ padding: "0" }}>
                <StyledRating
                  name="customized-color"
                  defaultValue={2}
                  getLabelText={(value) =>
                    `${value} Star${value !== 1 ? "s" : ""}`
                  }
                  precision={0.5}
                  icon={<StarIcon fontSize="inherit" />}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="price3" m={3}>
        {props.item.name}
      </Typography>
      <Divider />
      <Typography variant="breadCumbs" fontWeight={500} m={3}>
        Shipping fee: $9.99
      </Typography>
      <Stack direction="row" spacing="auto" m={3}>
        <Typography variant="price4" fontWeight={500}>
          Choose Color
        </Typography>
        <ToggleColor />
      </Stack>
      <Typography variant="price3" component="h1" fontWeight={500} m={3}>
        Total: ${9.99 + (props.item.price / 2) * quantity}
      </Typography>
      <TextField
        value={quantity}
        defaultValue={1}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{
          color: "#121212",
          backgroundColor: "#F5F5F5",
          marginLeft: 3,
        }}
        InputProps={{
          inputProps: { min: 0 },
          sx: {
            input: {
              textAlign: "center",
              width: 25,
            },
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleDecrease}>
                <Remove />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleIncrease}>
                <Add />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack spacing={3} mt={2}>
        <Button
          onClick={() =>
            dispatch(makePayment(9.99 + (props.item.price / 2) * quantity))
          }
          sx={{
            color: "#FEFEFE",
            backgroundColor: "#008060",
            width: "300px",
            height: "7vh",
            alignSelf: "center",
            "&:hover": {
              backgroundColor: "#008060",
              opacity: 0.75,
            },
          }}
          title="Buy Now"
        >
          Buy Now
        </Button>
        <Button
          sx={{
            color: "#FEFEFE",
            backgroundColor: "#141718",
            width: "300px",
            height: "7vh",
            alignSelf: "center",
            "&:hover": {
              backgroundColor: "#141718",
              opacity: 0.75,
            },
          }}
          title="Add to Cart"
        >
          Add to Cart
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductInfo;
