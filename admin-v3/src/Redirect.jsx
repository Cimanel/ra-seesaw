import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const afemV4Url = `${process.env.REACT_APP_API_URL}/v4/#`;

const Redirect = () => {
  const { search, pathname } = useLocation();
  useEffect(() => {
    window.location.href = `${afemV4Url}${pathname}${search}`;
  }, [pathname, search]);
  return <CircularProgress />;
};

export default Redirect;
