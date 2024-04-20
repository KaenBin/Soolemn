import React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";
import { products } from "../ProductDataBase";
import "../../cart.css";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import { green, red, blue } from "@mui/material/colors";
import { ColorList } from "../ColorList";
import ChooseColor from "./ChooseColor";
import ProDuctView from "./ProDuctView";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {/* <Box sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={5}>
                <img src={row.product.productImg} alt="Logo" />
              </Grid>
              <Grid container item xs={7}>
                <Grid container item xs={12}>
                  <Grid container item xs={12}>
                    <Grid item xs={12}>
                      <Typography fontFamily="" variant="h6" gutterBottom>
                        {row.product.productName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography fontFamily="" variant="body1" gutterBottom>
                        Color: {row.product.productColor}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <ChooseColor
                      row={row}
                      handleColorChange={props.handleColorChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box> */}
          <ProDuctView
            row={props.row}
            handleColorChange={props.handleColorChange}
          />
        </TableCell>
        {/* <TableCell align="right">{row.quantity}</TableCell> */}

        <TableCell align="right">
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
              onClick={() => props.handleRemoveQuantity(row.product_id)}
              disabled={row.quantity === 1 ? true : false}
            >
              <RemoveIcon />
            </Button>
            <Button>{row.quantity}</Button>
            <Button onClick={() => props.handleAddQuantity(row.product_id)}>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.price * row.quantity}</TableCell>
        <TableCell align="center">
          <DeleteIcon
            aria-label="expand row"
            onClick={() => {
              props.handleRemoveCart(row.product_id);
            }}
            style={{ cursor: "pointer" }}
          ></DeleteIcon>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TableCart(prop) {
  function handleColorChange(productId, color) {
    prop.setProducts(
      prop.productsList.map((product) =>
        product.product_id == productId ? { ...product, color: color } : product
      )
    );
  }
  function handleAddQuantity(productId) {
    prop.setProducts(
      prop.productsList.map((product) =>
        product.product_id == productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }
  function handleRemoveQuantity(productId) {
    prop.setProducts(
      prop.productsList.map((product) =>
        product.product_id == productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  function handleRemoveCart(productId) {
    // prop.setProducts(prop.productsList.filter((product) => product.product_id !== productId));
    prop.handleDeleteFromCart(productId);
  }
  function handleRemoveAll() {
    prop.handleDeleteAll();
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Subtotal&nbsp;($)</TableCell>
              <TableCell align="center">
                {" "}
                <DeleteIcon
                  onClick={handleRemoveAll}
                  aria-label="expand row"
                  style={{ cursor: "pointer" }}
                ></DeleteIcon>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prop.productsList?.length > 0 ? (
              prop.productsList.map((row, index) => (
                <Row
                  key={row.product_id}
                  row={row}
                  handleColorChange={handleColorChange}
                  handleAddQuantity={handleAddQuantity}
                  handleRemoveQuantity={handleRemoveQuantity}
                  handleRemoveCart={handleRemoveCart}
                />
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableCart;
