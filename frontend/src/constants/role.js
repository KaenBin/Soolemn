import { createElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export const VendorSideBar = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: createElement(HomeIcon, null),
  },
  {
    title: "Manage Products",
    link: "/product/manage",
    icon: createElement(Inventory2OutlinedIcon, null),
  },
];

export const AdminSideBar = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: createElement(HomeIcon, null),
  },
  {
    title: "Manage Users",
    link: "admin/users",
    icon: createElement(ManageAccountsOutlinedIcon, null),
  },
];
