import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { apiUrl } from "./App";

const Redirect = (props) => {
  const { url } = props;
  const { id } = useParams();
  const { search } = useLocation();
  const afemV3Url = `${apiUrl}/v3/#/`;
  useEffect(() => {
    const path = id ? `${url}/${id}` : url;
    window.location.href = `${afemV3Url}${path}${search}`;
  }, [url]);
  return <h5>Redirecting...</h5>;
};

export default Redirect;
