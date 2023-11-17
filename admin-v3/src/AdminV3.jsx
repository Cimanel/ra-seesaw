import * as React from "react";
import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { getV4Pages } from "./Redirect";
import { dataProvider } from "./dataProvider";




export const AdminV3 = () => (
  <Admin dataProvider={dataProvider} customRoutes={customRoutes()}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="todos"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);

const customRoutes = () => {
  const v4Pages = getV4Pages();

  return [...v4Pages];
};

export default AdminV3;
