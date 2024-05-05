import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/utils/themeUtils";
import mockProducts from "@/mockdata/products";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Header from "@/components/common/Header";
import { useSelector } from "react-redux";
import { CustomButton, CustomIconButton } from "@/components/styled";

const ProductManage = () => {
  const products = useSelector((state) => state.products);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log(products);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      align: "left",
      flex: 1,
      // cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      flex: 4,
    },
    {
      field: "stripe_metadata_price",
      headerName: "Price",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "stripe_metadata_category",
      headerName: "Category",
      flex: 2,
    },
    {
      field: "stripe_metadata_stock",
      headerName: "Stock",
      headerAlign: "center",
      align: "center",
      flex: 1,
      // renderCell: ({ row: { access } }) => {
      //   return (
      //     <Box
      //       width="60%"
      //       m="0 auto"
      //       p="5px"
      //       display="flex"
      //       justifyContent="center"
      //       backgroundColor={
      //         access === "admin"
      //           ? colors.greenAccent[600]
      //           : access === "manager"
      //           ? colors.greenAccent[700]
      //           : colors.greenAccent[700]
      //       }
      //       borderRadius="4px"
      //     >
      //       {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      //       {access === "manager" && <SecurityOutlinedIcon />}
      //       {access === "user" && <LockOpenOutlinedIcon />}
      //       <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
      //         {access}
      //       </Typography>
      //     </Box>
      //   );
      // },
    },
  ];

  return (
    <Box m="20px" width="100%">
      <Header title="PRODUCTS" subtitle="Managing your Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <CustomButton
          startIcon={<AddCircleIcon />}
          onClick={() => History.navigate("/product/add")}
        >
          Add Product
        </CustomButton>
        <DataGrid checkboxSelection rows={products.items} columns={columns} />
      </Box>
    </Box>
  );
};

export default ProductManage;
