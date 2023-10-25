import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "./dataprovider";

const AdminV3 = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default AdminV3;
