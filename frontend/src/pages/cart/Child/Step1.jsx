import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
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

function createData(product, quantity, price, subtotal, del) {
  return {
    product,
    quantity,
    price,
    subtotal,
    del,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.product.productName}
        </TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.subtotal}</TableCell>
        <TableCell  align="center">
          <DeleteIcon aria-label="expand row" ></DeleteIcon>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    product: PropTypes.shape({
      productId: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      productImg: PropTypes.string.isRequired,
      productColor: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const rows = [
  createData(
    {
      productId: "12345",
      productName: "Frozen yoghurt",
      productImg: "12345",
      productColor: "12345",
      date: "12345",
    },
    159,
    6.0,
    24,
    4.0,
    3.99
  ),
  createData(
    {
      productId: "11111",
      productName: "coca",
      productImg: "12345",
      productColor: "12345",
      date: "12345",
    },
    237,
    9.0,
    37,
    4.3,
    4.99
  ),
  createData(
    {
      productId: "22222",
      productName: "pepsi",
      productImg: "12345",
      productColor: "12345",
      date: "12345",
    },
    262,
    16.0,
    24,
    6.0,
    3.79
  ),
  createData(
    {
      productId: "33333",
      productName: "cupcake",
      productImg: "12345",
      productColor: "12345",
      date: "12345",
    },
    305,
    3.7,
    67,
    4.3,
    2.5
  ),
];
function Step1() {
  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Subtotal&nbsp;($)</TableCell>
              <TableCell align="center"> <DeleteIcon aria-label="expand row"></DeleteIcon></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Step1;
