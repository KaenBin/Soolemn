import { Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: "#FEFEFE",
  backgroundColor: "#008060",
  width: "200px",
  height: "7vh",
  alignSelf: "center",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#008060",
    opacity: 0.75,
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: "14px",
  color: "#FEFEFE",
  backgroundColor: "#008060",
  width: "200px",
  height: "7vh",
  alignSelf: "center",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#008060",
    opacity: 0.75,
  },
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  "&:hover": {
    backgroundColor: grey[500],
  },
}));
