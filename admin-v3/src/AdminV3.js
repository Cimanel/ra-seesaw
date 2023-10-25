import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import { getV4Pages } from "./Redirect";
import { dataProvider } from "./dataprovider";
console.log(process.env.REACT_APP_V4_AVAILABLE_RESOURCES);
export const V4ResourcesToServe =
  process.env.REACT_APP_V4_AVAILABLE_RESOURCES || "";

export const AdminV3 = () => (
  <Admin dataProvider={dataProvider} customRoutes={customRoutes()}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

const customRoutes = () => {
  const v4Pages = getV4Pages();

  return [...v4Pages];
};

export default AdminV3;
