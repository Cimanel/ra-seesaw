import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

export const V4AvailableResources =
  process.env.REACT_APP_V4_AVAILABLE_RESOURCES?.split(",") || "";

export const getV4Pages = () => {
  const v4Pages = V4AvailableResources.map((resource) => {
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
  return v4Pages.flat();
};

const afemV4Url = `${process.env.REACT_APP_API_URL}/v4/#`;

const Redirect = () => {
  const { search, pathname } = useLocation();
  useEffect(() => {
    window.location.href = `${afemV4Url}${pathname}${search}`;
  }, [pathname, search]);
  return <CircularProgress />;
};

export default Redirect;
