import React, { useEffect } from "react";
// import { Basket } from "@/components/basket";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import * as page from "@/pages";
import { NavigateSetter } from "@/utils/utils";
import { TopBar } from "@/components/common";
import * as ROUTES from "@/constants/routes";
import CustomerRouter from "./CustomerRouter";
import VendorRouter from "./VendorRouter";
import { CssBaseline } from "@mui/material";

const AppRouter = () => {
  const user = useSelector((state) => state.auth);

  const routes = () => {
    switch (user?.role) {
      case "USER":
        return <CustomerRouter />;
      case "VENDOR":
        return <VendorRouter />;
      // case "ROLE_RECRUITER":
      //   return RECerRoutes;
      // case "ROLE_ADMIN":
      //   return AdminRoutes;
      default:
        return (
          <Routes>
            <Route
              exact
              path="/*"
              element={<Navigate to="/signin" replace />}
            />
            <Route path={ROUTES.SIGNIN} Component={page.SignIn} />
            <Route path={ROUTES.SIGNUP} Component={page.SignUp} />
          </Routes>
        );
    }
  };

  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        {/* <Basket /> */}
        <NavigateSetter />
        {routes()}
        {/* <Route
            exact
            path="add-product-form"
            Component={page.AddProductForm}
          /> */}

        {/* <Route component={view.Search} exact path={ROUTES.SEARCH} />
        <Route component={view.Home} exact path={ROUTES.HOME} />
        <Route component={view.Shop} exact path={ROUTES.SHOP} />
        <Route
          component={view.FeaturedProducts}
          exact
          path={ROUTES.FEATURED_PRODUCTS}
        />
        <Route
          component={view.RecommendedProducts}
          exact
          path={ROUTES.RECOMMENDED_PRODUCTS}
        /> */}
        {/* <PublicRoute component={page.SignUp} path={ROUTES.SIGNUP} />
        <PublicRoute component={page.SignIn} exact path={ROUTES.SIGNIN} /> */}
        {/* <PublicRoute
          component={view.ForgotPassword}
          path={ROUTES.FORGOT_PASSWORD}
        />
        <ClientRoute component={view.UserAccount} exact path={ROUTES.ACCOUNT} />
        <ClientRoute
          component={view.EditAccount}
          exact
          path={ROUTES.ACCOUNT_EDIT}
        />
        <ClientRoute
          component={view.CheckOutStep1}
          path={ROUTES.CHECKOUT_STEP_1}
        />
        <ClientRoute
          component={view.CheckOutStep2}
          path={ROUTES.CHECKOUT_STEP_2}
        />
        <ClientRoute
          component={view.CheckOutStep3}
          path={ROUTES.CHECKOUT_STEP_3}
        />
        <AdminRoute
          component={view.Dashboard}
          exact
          path={ROUTES.ADMIN_DASHBOARD}
        />
        <AdminRoute component={view.Products} path={ROUTES.ADMIN_PRODUCTS} />
        <AdminRoute component={view.AddProduct} path={ROUTES.ADD_PRODUCT} />
        <AdminRoute
          component={view.EditProduct}
          path={`${ROUTES.EDIT_PRODUCT}/:id`}
        />
        <PublicRoute component={view.PageNotFound} /> */}

        {/* <Footer /> */}
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
