import {
  Admin,
  CustomRoutes,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";
import Redirect from "./Redirect";
import { dataProvider } from "./dataProvider";

const V4ResourcesToServe = import.meta.env.VITE_V4_AVAILABLE_RESOURCES;
export const apiUrl = import.meta.env.VITE_API_URL;

export const App = () => {
  return (
    <Admin
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
      <CustomRoutes>
        {!V4ResourcesToServe.includes("users") && (
          <Route path="users/" element={<Redirect url="users" />}>
            <Route path=":id" element={<Redirect url="users" />} />
          </Route>
        )}
        {!V4ResourcesToServe.includes("posts") && (
          <Route path="posts/" element={<Redirect url="posts" />}>
            <Route path=":id" element={<Redirect url="posts" />} />
          </Route>
        )}
        {!V4ResourcesToServe.includes("comments") && (
          <Route path="comments/" element={<Redirect url="comments" />}>
            <Route path=":id" element={<Redirect url="comments" />} />
          </Route>
        )}{" "}
        {!V4ResourcesToServe.includes("todos") && (
          <Route path="todos/" element={<Redirect url="todos" />}>
            <Route path=":id" element={<Redirect url="todos" />} />
          </Route>
        )}
      </CustomRoutes>
    </Admin>
  );
};
