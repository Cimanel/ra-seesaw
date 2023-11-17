import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const Redirect = () => {
  const { search, pathname } = useLocation();
  const afemV3Url = `${API_URL}/v3/#`;
  useEffect(() => {
    window.location.href = `${afemV3Url}${pathname}${search}`;
  }, [afemV3Url, pathname, search]);
  return <CircularProgress />;
};

export default Redirect;
