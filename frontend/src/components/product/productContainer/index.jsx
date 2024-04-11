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

import img from "@/assets/OIP.jpg";
import { StyledRating } from "@/utils/utils";
import { Link, useParams } from "react-router-dom";
import apiInstance from "@/services/apiService";

const ProductContainer = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState();
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleProduct = () => History.navigate(`/product/${props.item.id}`);

  React.useEffect(() => {
    if (props.item.images)
      apiInstance
        .loadImage(
          "gs://soolemn-cc5b9.appspot.com/products/" + props.item.images[0]
        )
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <Card
      key={props.idx}
      sx={{
        width: props.size == "small" ? 130 : 260,
        height: props.size == "small" ? 205 : 410,
        marginRight: "auto",
        marginLeft: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <CardActionArea onClick={handleProduct}>
        <CardMedia
          aria-owns="mouse-over-popover"
          aria-haspopup="true"
          component="img"
          height="320"
          image={imageUrl ? imageUrl : img}
          alt="the image of a product"
          onMouseOver={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
        {props.size != "small" && <Typography variant="status">NEW</Typography>}
        {props.size != "small" && (
          <Typography
            style={{
              top: "12%",
              color: "#FEFEFE",
              backgroundColor: "#38CB89",
            }}
            variant="status"
          >
            -50%
          </Typography>
        )}
        <CardContent>
          <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) => `${value} Star${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />{" "}
          <Typography noWrap gutterBottom variant="price1" maxWidth="205">
            {props.item.name}
          </Typography>
          <Typography display="inline" variant="price1">
            ${(props.item.price / 2).toFixed(2)}
          </Typography>{" "}
          {true ? (
            <Typography
              display="inline"
              style={{ textDecorationLine: "line-through" }}
              variant="price2"
            >
              ${props.item.price}
            </Typography>
          ) : (
            <></>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductContainer;
