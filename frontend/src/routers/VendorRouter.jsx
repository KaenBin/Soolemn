import { Navigate, Route, Routes } from "react-router-dom";

import * as page from "@/pages";
import * as ROUTES from "@/constants/routes";
import { TopBar, SideBar } from "@/components/common";

const VendorRouter = () => {
  return (
    <div className="app">
      <TopBar />
      <main className="content">
        <SideBar />
        <Routes>
          <Route
            exact
            path="/*"
            element={<Navigate to="/dashboard" replace />}
          />
          <Route path={ROUTES.DASHBOARD} Component={page.DashBoard} />

          <Route path={ROUTES.MANAGE_PRODUCTS} Component={page.ProductManage} />
          <Route path={ROUTES.ADD_PRODUCTS} Component={page.AddProduct} />

          <Route path={ROUTES.ADMIN_USERS} Component={page.UserManage} />
        </Routes>
      </main>
    </div>
  );
};

export default VendorRouter;
