import {
  Admin,
  CustomRoutes,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { getV3Routes } from "./getV3Routes";
import authProvider from "./authProvider";

export const AdminV4 = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      // theme={nanoLightTheme}
    >
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
      <CustomRoutes>{getV3Routes()}</CustomRoutes>
    </Admin>
  );
};
