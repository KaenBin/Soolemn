import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { Pagination } from "@mui/material";

import { setAuthenticating } from "@/redux/actions/miscActions";
import { ProductGroup, ProductGroup2 } from "@/components/product";
import mock_product from "@/mockdata/products";
import apiInstance from "@/services/apiService";

export default function ProductOverview(props) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await apiInstance.getProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(
    () => () => {
      dispatch(setAuthenticating(false));
    },
    []
  );

  return (
    <main className="content">
      <div className="home">
        <Grid
          container
          minHeight={160}
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <ProductGroup2 title="Exclusive deal" list={products} block={15} />
        </Grid>
      </div>
    </main>
  );
}
