import * as React from "react";
import Carousel from "react-multi-carousel";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Pagination, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "react-multi-carousel/lib/styles.css";
import ProductContainer from "../productContainer";
import ProductList from "../productList";
import { ListPagination } from "@/components/pagination";
import {
  NormalFilter,
  CheckboxFilter,
  FreeSoloFilter,
} from "@/components/filter";
import mock_product from "@/mockdata/products";
import mock_categories from "@/mockdata/categories";
import { Sort, Price, Category } from "@/constants/filters";
import { listFilter } from "@/utils/utils";

const ProductGroup2 = (props) => {
  const [page, setPage] = React.useState(props.list.length ? 1 : 0);
  const [category, setCategory] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();
  const [sort, setSort] = React.useState(Sort[0]);

  return (
    <Box width="90vw">
      <Grid
        container
        flexDirection="column"
        columnSpacing={3}
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          flexDirection="row"
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Grid item>
            <CheckboxFilter
              value={category}
              setValue={setCategory}
              type="CATEGORIES"
              list={Category}
            />
          </Grid>
          <Grid
            item
            flexDirection="row"
            width="30vw"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FreeSoloFilter
              value={minPrice}
              setValue={setMinPrice}
              type="$ MINIMUM"
              list={Price.slice(0, Price.length - 1)}
            />
            <ArrowBackIosNewIcon height="100%" />
            <FreeSoloFilter
              value={maxPrice}
              setValue={setMaxPrice}
              type="$ MAXIMUM"
              list={Price.slice(1)}
            />
          </Grid>
          <Grid item>
            <NormalFilter
              value={sort}
              setValue={setSort}
              type="SORT BY"
              list={Sort}
            />
          </Grid>
        </Grid>
        <Grid item display="flex" justifyContent="center">
          <ProductList
            list={listFilter(props.list, category, minPrice, maxPrice).slice(
              0,
              (page - 1) * 20 + 20
            )}
          />
        </Grid>
        {page * 20 < props.list.length ? (
          <Grid item>
            <Button
              onClick={() => setPage(page + 1)}
              style={{
                color: "#141718",
                width: "163px",
                height: "40px",
                alignSelf: "center",
                border: "solid",
                borderColor: "#141718",
                borderRadius: 80,
              }}
            >
              Show more
            </Button>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};

export default ProductGroup2;
