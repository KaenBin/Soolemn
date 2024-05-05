import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
} from "@mui/material";

import apiInstance from "@/services/apiService";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiInstance
      .getOrders()
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{
        // width: "80vw",
        margin: "auto",
        marginTop: "3%",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Number ID</TableCell>
            <TableCell align="center">Dates</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow sx={{ height: "300px" }}>
              <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                <CircularProgress size={80} color="inherit" />
              </TableCell>
            </TableRow>
          ) : (
            orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell align="center">{order?.id}</TableCell>
                <TableCell align="center">
                  {new Date(order?.created * 1000).toUTCString()}
                </TableCell>
                <TableCell align="center">{order?.status}</TableCell>
                <TableCell align="center">
                  {order?.amount.toLocaleString("en-US") + " VND"}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
