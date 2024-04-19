import * as React from "react";
import { Card } from "@mui/material";

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
      <CustomCarousel {...props} />
    </Card>
  );
};

export default ProductImage;
