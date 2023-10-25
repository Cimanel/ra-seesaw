import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
export const afemV3Url = `${apiUrl}/v3/#/`;

const Redirect = (props) => {
  const { url } = props;
  const { id } = useParams();
  const { search } = useLocation();
  useEffect(() => {
    const path = id ? `${url}/${id}` : url;
    window.location.href = `${afemV3Url}${path}${search}`;
  }, [url]);
  return <h5>Redirecting...</h5>;
};

export default Redirect;
