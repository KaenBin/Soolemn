import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";

import "react-multi-carousel/lib/styles.css";
import ProductContainer from "../productContainer";

const ProductList = (props) => {
  return (
    <Grid
      container
      key={props.index}
      display="flex"
      justifyContent="center"
      columnSpacing={props.size == "small" ? 2 : 10}
      rowSpacing={5}
    >
      {props.list.map((item, idx) => {
        return (
          <Grid key={idx}>
            <ProductContainer {...props} idx={idx} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
