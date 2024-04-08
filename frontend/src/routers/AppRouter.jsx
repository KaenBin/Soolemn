import React from "react";
// import { Basket } from "@/components/basket";
import * as ROUTES from "@/constants/routes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as page from "@/pages";
import { NavigateSetter } from "@/utils/utils";
import { TopBar } from "@/components/common";

const AppRouter = () => (
  <BrowserRouter>
    <>
      <TopBar />
      {/* <Basket /> */}
      <NavigateSetter />
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route exact path={ROUTES.SIGNIN} Component={page.SignIn} />
        <Route exact path={ROUTES.SIGNUP} Component={page.SignUp} />
        <Route exact path={ROUTES.HOME} Component={page.Home} />
        <Route exact path={ROUTES.PRODUCTS} Component={page.Products} />
        <Route
          exact
          path={ROUTES.DISCOUNTED_PRODUCTS}
          Component={page.Discounted}
        />
        <Route
          exact
          path={ROUTES.FEATURED_PRODUCTS}
          Component={page.Featured}
        />
        <Route exact path={ROUTES.CATEGORIES} Component={page.Categories} />
        <Route exact path={ROUTES.VIEW_PRODUCT} Component={page.ProductDetail} />

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
      </Routes>
      {/* <Footer /> */}
    </>
  </BrowserRouter>
);

export default AppRouter;
