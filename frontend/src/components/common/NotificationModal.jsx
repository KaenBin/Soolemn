import React from "react";
import { Modal, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import * as ROUTE from "@/constants/routes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NotificationModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="notification-modal"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#E0F7FA",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="notification-modal"
          variant="h6"
          component="h2"
          textAlign="center"
          color="#F06292"
        >
          <AddShoppingCartIcon />
        </Typography>
        <Typography variant="body1" textAlign="center">
          Product added to cart successfully!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            component={Link}
            to={ROUTE.CART}
            variant="contained"
            color="primary"
            sx={{ color: "#FFFFFF", mr: 2, width: "150px" }}
          >
            Go to Cart
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="error"
            sx={{ width: "150px" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NotificationModal;
