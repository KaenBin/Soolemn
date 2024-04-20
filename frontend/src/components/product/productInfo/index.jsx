import React, { useState, useEffect } from "react";
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
import {
  ToggleColor,
  CustomButtonGroup,
  NotificationModal,
} from "@/components/common";
import { makePayment } from "@/redux/actions/profileActions";
import { addtoCart } from "../../../redux/slice/cartSlice";
import apiInstance from "@/services/apiService";

const ProductInfo = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [cartLength, setCartLength] = useState(0);
  const currentUser = apiInstance.getCurrentUser();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await apiInstance.getUser(currentUser.email);

        setUserData(userData);
        setCartLength(userData.cart.length);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    getUserData();
  }, [currentUser.email]);

  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id.split("/").pop();

  const handleIncrease = () => {
    setQuantity(Number(quantity + 1));
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(Number(quantity - 1));
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleChangeColor = (color) => {
    setSelectedColor(color);
  };

  const handlePurchase = async (data) => {
    await apiInstance.payByStrip(data).then((checkOutUrl) => {
      window.location.assign(checkOutUrl);
    });
  };

  const ImageUrl =
    props.item.images && props.item.images.length > 0
      ? props.item.images[0]
      : null;

  const handleAddToCart = async () => {
    const data = {
      email: currentUser.email,
      product_id: id,
      name: props.item.name,
      quantity: quantity,
      color: selectedColor,
      price: props.item.price / 2,
      image: ImageUrl,
    };
    try {
      await apiInstance.addToCart(data);
      dispatch(addtoCart(data));
      // setCartLength((prevLength) => prevLength + 1);
      setNotificationOpen(true);
    } catch (error) {
      alert("Failed to add product to cart.");
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
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

        {props.item.color ? (
          <Stack direction="row" spacing="auto" m={3}>
            <Typography variant="price4" fontWeight={500}>
              Choose Color
            </Typography>
            <ToggleColor
              colorOptions={props.item.color}
              selectedColor={selectedColor}
              handleChangeColor={handleChangeColor}
            />
          </Stack>
        ) : null}

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
            onClick={() => handlePurchase({})}
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
            onClick={handleAddToCart}
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
      <NotificationModal
        open={notificationOpen}
        handleClose={() => setNotificationOpen(false)}
      />
    </>
  );
};

export default ProductInfo;
