import React from "react";
import { Route } from "react-router-dom";
import Redirect from "./Redirect";

export const V4AvailableResources =
  process.env.REACT_APP_V4_AVAILABLE_RESOURCES?.split(",") || "";

export const getV4Routes = () => {
  const v4Routes = V4AvailableResources.map((resource) => {
    return [
      <Route
        exact
        path={`/${resource}/`}
        key={`/${resource}/`}
        component={() => <Redirect />}
      />,
      <Route
        path={`/${resource}/:id/show`}
        key={`/${resource}/:id/show`}
        component={() => <Redirect />}
      />,
      <Route
        path={`/${resource}/:id`}
        key={`/${resource}/:id`}
        component={() => <Redirect />}
      />,
    ];
  });
  return v4Routes.flat();
};
