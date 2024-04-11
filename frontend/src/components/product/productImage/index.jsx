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
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import SwipeableViews from "react-swipeable-views";
import { Link, useParams } from "react-router-dom";

import img from "@/assets/OIP.jpg";
import { StyledRating } from "@/utils/utils";
import { CustomCarousel } from "@/components/carousel";

const ProductImage = (props) => {
  return (
    <Card
      sx={{
        width: 300,
        height: "80vh",
        marginX: "auto",
      }}
    >
      <CustomCarousel />
    </Card>
  );
};

export default ProductImage;
