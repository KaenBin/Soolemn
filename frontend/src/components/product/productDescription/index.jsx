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
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import SwipeableViews from "react-swipeable-views";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { tableCellClasses } from "@mui/material/TableCell";

import img from "@/assets/OIP.jpg";
import { StyledRating } from "@/utils/utils";
import { CustomCarousel } from "@/components/carousel";
import SimilarProducts from "../similarProducts";
import mock_product from "@/mockdata/products";
import { products } from "@/services/apiService";

const ProductDescription = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      px={2}
      sx={{
        width: 500,
        height: "100vh",
      }}
    >
      <Stack display="flex" justifyContent="start" spacing={2}>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Star${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<StarIcon fontSize="inherit" />}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        15 reviews
        <Typography variant="title" m="5px">
          {props.item.name}
        </Typography>
        <Typography
          display="inline"
          style={{ fontWeight: "500" }}
          variant="price3"
          m="10px"
        >
          ${(props.item.price / 2).toFixed(2)}
        </Typography>{" "}
        {true ? (
          <Typography
            display="inline"
            style={{ textDecorationLine: "line-through", fontWeight: "normal" }}
            variant="price4"
          >
            ${Number(props.item.price).toFixed(2)}
          </Typography>
        ) : (
          <></>
        )}
        <Divider />
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
                <TableCell sx={{ color: "#6C7275" }}>SKU</TableCell>
                <TableCell sx={{ color: "#141718" }}>ABC123</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: "#6C7275" }}>CATEGORY</TableCell>
                <TableCell sx={{ color: "#141718" }}>
                  {props.item.category}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="description" m="5px">
          Description:
        </Typography>
        {expanded ? (
          <Typography variant="price4" sx={{ fontWeight: "normal" }} m="5px">
            {props.item?.description}
          </Typography>
        ) : (
          <Typography variant="price4" sx={{ fontWeight: "normal" }} m="5px">
            {props.item.description
              ? props.item.description.length > 125
                ? `${props.item.description.slice(0, 125)}...`
                : props.item.description
              : "No description"}
          </Typography>
        )}
        {props.item.description && props.item.description.length > 125 && (
          <Button onClick={toggleExpanded} color="primary">
            {expanded ? "Show Less" : "Show More"}
          </Button>
        )}
        <Typography variant="description" m="5px">
          Similar Product:
        </Typography>
        <SimilarProducts list={products} block={3} />
      </Stack>
    </Box>
  );
};

export default ProductDescription;
