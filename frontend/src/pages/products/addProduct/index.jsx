import { useEffectm, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
  Typography,
  TextField,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  CardMedia,
  CardActions,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import product1 from "@/assets/OIP.jpg";
import apiInstance from "@/services/apiService";

import { setAuthenticating } from "@/redux/actions/miscActions";
import { Header } from "@/components/common";
import ProductInformation from "./productInformation";
import ProductDiscount from "./productDiscount";
import ProductDetail from "../productDetail";
import ProductDelivery from "./productDelivery";
import { addProduct } from "@/redux/actions/productActions";
// import mock_product from "@/mockdata/products";
// import { ProductGroup } from "@/components/product";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddProduct() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("Information");

  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    images: "",
    brand: "",
    origin: "",
    color: ["red", "green", "blue"],
  });

  const currentUser = apiInstance.getCurrentUser();

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductData({ ...productData, images: reader.result });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[500],
    },
  }));

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleUpdateData = (key, value) => {
    setProductData({ ...productData, [key]: value });
  };

  const handleSubmit = () => {
    dispatch(addProduct(productData));
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Information":
        return (
          <ProductInformation
            productData={productData}
            handleUpdateData={handleUpdateData}
            handleSubmit={handleSubmit}
          />
        );
      case "Details":
        return <ProductDetail />;
      case "Discount":
        return <ProductDiscount />;
      case "Delivery":
        return <ProductDelivery />;
      default:
        return null;
    }
  };

  return (
    <Box m="40px" width="100%">
      <Header title="Product Details" subtitle="Add New Product" />
      <Grid container xs={12}>
        <Grid xs={4}>
          <Stack
            p="40px"
            style={{
              backgroundColor: "#F3F5F7",
              width: "90%",
              borderRadius: 10,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: 300,
              }}
            >
              <Avatar
                sx={{ width: 200, height: 200, borderRadius: "0%", margin: 3 }}
                src={productData.images}
              />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
              </Button>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <h2>User Name</h2>
            </Grid>
            <TableContainer
              component={Paper}
              sx={{
                width: "90%",
                margin: "auto",
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                marginTop: "15px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow
                    onClick={() => handleTabClick("Information")}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <TableCell
                      align="center"
                      sx={{ borderColor: "black", fontSize: "18px" }}
                    >
                      <b>Account</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {["Details", "Discount", "Delivery"].map((tab, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleTabClick(tab)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <TableCell align="center" sx={{ border: "none" }}>
                        {tab}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Grid>
        <Grid xs={8}>
          <h2>Your Product {selectedTab}</h2>
          {renderTabContent()}
        </Grid>
      </Grid>
    </Box>
  );
}
