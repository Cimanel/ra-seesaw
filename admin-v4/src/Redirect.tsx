import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiUrl } from "./AdminV4";

const Redirect = () => {
  const { search, pathname } = useLocation();
  const afemV3Url = `${apiUrl}/v3/#`;
  useEffect(() => {
    window.location.href = `${afemV3Url}${pathname}${search}`;
  }, [afemV3Url, pathname, search]);
  return <CircularProgress />;
};

export default Redirect;
