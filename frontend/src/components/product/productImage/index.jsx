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

import img from "@/assets/OIP.jpg";
import { StyledRating } from "@/utils/utils";
import { Link, useParams } from "react-router-dom";

const images = ["@/assets/OIP.jpg", "@/assets/OIP2.jpg", "@/assets/OIP3.jpg"];

const ProductImage = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleButtonAdd = () => alert("it works");

  const handleProduct = () => History.navigate(`/product/${props.item.id}`);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Card
      sx={{
        width: 240,
        height: 410,
        marginX: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {images.map((img, idx) => (
          <CardActionArea key={idx}>
            <CardMedia
              component="img"
              height="320"
              image={img}
              alt={`Product ${idx + 1}`}
              onMouseOver={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            />
            {index === idx && (
              <Button
                onClick={handleButtonAdd}
                onMouseOver={handlePopoverOpen}
                sx={{
                  position: "absolute",
                  bottom: "30%",
                  left: "10%",
                  color: "#FEFEFE",
                  backgroundColor: "#141718",
                  width: "200px",
                  height: "40px",
                  alignSelf: "center",
                }}
              >
                Add to Cart
              </Button>
            )}
            <Typography
              sx={{
                position: "absolute",
                top: "12%",
                color: "#FEFEFE",
                backgroundColor: "#38CB89",
              }}
              variant="status"
            >
              -50%
            </Typography>
            <IconButton
              sx={{
                backgroundColor: "#FFFFFF",
                position: "absolute",
                width: "35px",
                height: "35px",
                top: "3%",
                right: "3%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
              variant="contained"
            >
              <FavoriteBorderIcon />
            </IconButton>
            <CardContent>
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
              <Typography noWrap gutterBottom variant="price1" maxWidth="205">
                {props.item.name}
              </Typography>
              <Typography display="inline" variant="price1">
                ${props.item.price / 2}
              </Typography>{" "}
              {true ? (
                <Typography
                  display="inline"
                  sx={{ textDecorationLine: "line-through" }}
                  variant="price2"
                >
                  ${props.item.price}
                </Typography>
              ) : (
                <></>
              )}
            </CardContent>
          </CardActionArea>
        ))}
      </SwipeableViews>
    </Card>
  );
};

export default ProductImage;

// import * as React from "react";
// import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

// interface ProductImageProps {
//   src: string;
//   alt: string;
// }

// const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => (
//   <img
//     loading="lazy"
//     src={src}
//     alt={alt}
//     style={{
//       flexShrink: 0,
//       alignSelf: "stretch",
//       margin: "auto",
//       boxShadow:
//         "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
//       aspectRatio: "0.85",
//       width: "35px",
//     }}
//   />
// );

// const ProductThumbnail: React.FC = () => (
//   <Box
//     sx={{
//       flexShrink: 0,
//       backgroundColor: "#d6d3d1",
//       height: "167px",
//       width: "130px",
//     }}
//     role="img"
//     aria-label="Product thumbnail"
//   />
// );

// const MyComponent: React.FC = () => {
//   const productImages = [
//     { src: "product-image-1.jpg", alt: "Product image 1" },
//     { src: "product-image-2.jpg", alt: "Product image 2" },
//   ];

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "437px" }}>
//       <Card
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           px: 2.5,
//           pt: 7,
//           pb: 20,
//           width: "100%",
//           fontSize: "lg",
//           fontWeight: "bold",
//           lineHeight: "1.25rem",
//           textAlign: "center",
//           backgroundColor: "#d6d3d1",
//         }}
//         component="header"
//       >
//         <CardContent
//           sx={{
//             justifyContent: "center",
//             px: 2.5,
//             py: 1.5,
//             ml: 4,
//             whiteSpace: "nowrap",
//             backgroundColor: "#fff",
//             borderRadius: "0.25rem",
//             color: "#171717",
//           }}
//         >
//           NEW
//         </CardContent>
//         <CardContent
//           sx={{
//             justifyContent: "center",
//             px: 2.5,
//             py: 1.5,
//             mt: 2,
//             ml: 4,
//             color: "#fff",
//             whiteSpace: "nowrap",
//             backgroundColor: "#34d399",
//             borderRadius: "0.25rem",
//           }}
//         >
//           -50%
//         </CardContent>
//         <Box
//           sx={{
//             display: "flex",
//             gap: 3.5,
//             alignItems: "center",
//             alignSelf: "stretch",
//             mt: 44,
//             mb: 24,
//             fontSize: "6xl",
//             fontWeight: "medium",
//             letterSpacing: "-0.025em",
//             color: "#000",
//             lineHeight: "58px",
//           }}
//         >
//           {productImages.map((image, index) => (
//             <ProductImage key={index} src={image.src} alt={image.alt} />
//           ))}
//           <Typography sx={{ flexGrow: 1, alignSelf: "stretch" }}>
//             An image <br /> of a product
//           </Typography>
//           {productImages.map((image, index) => (
//             <ProductImage key={index + 2} src={image.src} alt={image.alt} />
//           ))}
//         </Box>
//       </Card>
//       <Box sx={{ px: 5, mt: 6, width: "100%" }} component="section">
//         <Grid container spacing={5}>
//           <Grid
//             item
//             xs={12}
//             sm={4}
//             sx={{ display: "flex", flexDirection: "column" }}
//           >
//             <ProductThumbnail />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={4}
//             sx={{ display: "flex", flexDirection: "column", ml: 5 }}
//           >
//             <ProductThumbnail />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={4}
//             sx={{ display: "flex", flexDirection: "column", ml: 5 }}
//           >
//             <ProductThumbnail />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default MyComponent;
