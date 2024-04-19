import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  Avatar,
  AppBar,
  Stack,
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useDispatch } from "react-redux";
import { signOut } from "@/redux/actions/authActions";
import * as ROUTE from "@/constants/routes";
import apiInstance from "@/services/apiService";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const badgeStyle = {
  "& .MuiBadge-badge": {
    color: "white",
    backgroundColor: "#141718",
  },
};

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = React.useState();
  const [imageUrl, setImageUrl] = React.useState();
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      disableScrollLock={true}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      style={{ padding: 0 }}
      open={isMenuOpen}
      onClose={() => handleMenuClose()}
    >
      <MenuItem
        onClick={() => {
          History.navigate("/account");
          handleMenuClose();
        }}
      >
        My account
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(signOut());
          handleMenuClose();
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  );
  React.useEffect(() => {
    apiInstance
      .loadImage("gs://soolemn-cc5b9.appspot.com/defaultAvatar.jpg")
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} boxShadow={3}>
      <AppBar position="fixed" color="info">
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            spacing={4}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Link to="/home" className="navigation">
                Soolemn
              </Link>
            </Typography>
            <Stack
              id="navigation-menu"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <NavLink className="navigation" to={ROUTE.HOME}>
                Home
              </NavLink>
              <NavLink className="navigation" to={ROUTE.PRODUCTS}>
                Product
              </NavLink>
              <NavLink className="navigation" to={ROUTE.DISCOUNTED_PRODUCTS}>
                On Sale
              </NavLink>
              <NavLink className="navigation" to={ROUTE.FEATURED_PRODUCTS}>
                Featured
              </NavLink>
              <NavLink className="navigation" to={ROUTE.CATEGORIES}>
                Categories
              </NavLink>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                <Tooltip title="Open settings">
                  <Avatar
                    id="my"
                    alt="Account"
                    src={imageUrl}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
                {renderMenu}
                <IconButton
                  size="large"
                  aria-label="show 3 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={3} sx={badgeStyle}>
                    <NotificationsOutlinedIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 2 items in shopping cart"
                  color="inherit"
                  component={Link}
                  to={ROUTE.CART}
                >
                  <Badge badgeContent={2} sx={badgeStyle}>
                    <LocalMallOutlinedIcon />
                  </Badge>
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
