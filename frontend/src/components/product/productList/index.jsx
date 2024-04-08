import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";

import "react-multi-carousel/lib/styles.css";
import ProductContainer from "../productContainer";

const ProductList = (props) => {
  return (
    <Grid container display="flex" justifyContent="center" spacing={10}>
      {props.list.map((item, idx) => {
        return (
          <Grid item>
            <ProductContainer idx={idx} item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;