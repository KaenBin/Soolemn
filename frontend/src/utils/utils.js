import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

// const History = {
//   navigate: null,
//   push: (page, ...rest) => History.navigate(page, ...rest),
// };

// navigate
export const NavigateSetter = () => {
  History.navigate = useNavigate();
  return null;
};

//function
export const getListName = (list) => {
  const output = [];

  for (let i = 0; i < list.length; i++) output.push(list[i].name);

  return output;
};

export const listFilter = (
  list,
  category = [],
  minPrice = "0",
  maxPrice = "Highest",
  search = ""
) => {
  let filtered = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  if (category.length) {
    filtered = filtered.filter((item) =>
      category.every((obj) => item.category.includes(obj.value))
    );
  }
  if (minPrice !== "") {
    filtered = filtered.filter((item) => item.price >= parseInt(minPrice));
  }
  if (maxPrice !== "Highest" && maxPrice !== "") {
    filtered = filtered.filter((item) => item.price <= parseInt(maxPrice));
  }

  return filtered;
};

// styling
export const theme = createTheme({
  typography: {
    title: {
      color: "#141718",
    },
    price1: {
      color: "#141718",
    },
    price2: {
      color: "#6C7275",
    },
    price3: {
      color: "#141718",
    },
    price4: {
      color: "#6C7275",
    },
    description: {
      color: "#6C7275",
    },
    subBreadCumbs: {
      color: "#605F5F",
    },
    breadCumbs: {
      color: "#121212",
    },
    status: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#121212",
      backgroundColor: "#FFFFFF",
      position: "absolute",
      width: "60px",
      height: "25px",
      top: "4%",
      left: "5%",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10%",
      verticalAlign: "middle",
    },
  },
  palette: {
    info: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#141718",
    },
    tertiary: {
      main: "#D0D0D0",
    },
    button: {
      main: "#141718",
      light: "#6C7275",
    },
    ltrButton: {
      main: "#141718",
      backgroundColor: "blue",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          status: "h4",
          title: "h1",
          price1: "h3",
          price3: "h2",
          price4: "h3",
          description: "h2",
          breadCumbs: "h4",
        },
      },
    },
  },
});

export const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#343839",
  },
  "& .MuiRating-iconHover": {
    color: "#343839",
  },
});
