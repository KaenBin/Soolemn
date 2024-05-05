import { Navigate, Route, Routes } from "react-router-dom";

import * as page from "@/pages";
import * as ROUTES from "@/constants/routes";
import { TopBar } from "@/components/common";

const CustomerRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Navigate to="/home" replace />} />
        <Route path={ROUTES.HOME} Component={page.Home} />
        <Route path={ROUTES.PRODUCTS} Component={page.Products} />
        <Route path={ROUTES.DISCOUNTED_PRODUCTS} Component={page.Discounted} />
        <Route path={ROUTES.FEATURED_PRODUCTS} Component={page.Featured} />
        <Route path={ROUTES.CATEGORIES} Component={page.Categories} />
        <Route path={ROUTES.VIEW_PRODUCT} Component={page.ProductDetail} />
        <Route path={ROUTES.CART} Component={page.Cart} />
        <Route path={ROUTES.ACCOUNT} Component={page.Account} />
      </Routes>
      <TopBar />
    </>
  );
};

export default CustomerRouter;
