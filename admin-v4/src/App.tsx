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

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      {V4ResourcesToServe?.includes("users") && (
        <Resource
          name="users"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      )}
      {V4ResourcesToServe?.includes("users") && (
        <Resource
          name="posts"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      )}
      {V4ResourcesToServe?.includes("comments") && (
        <Resource
          name="comments"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      )}
      {V4ResourcesToServe?.includes("todos") && (
        <Resource
          name="todos"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      )}
      <CustomRoutes>
        {!V4ResourcesToServe.includes("users") && (
          <Route path="users/" element={<Redirect url="users" />}>
            <Route path=":id" element={<Redirect url="teaseusersrs" />} />
          </Route>
        )}
        {!V4ResourcesToServe.includes("posts") && (
          <Route path="posts/" element={<Redirect url="posts" />} />
        )}
        {!V4ResourcesToServe.includes("comments") && (
          <Route path="comments/" element={<Redirect url="pages" />}>
            <Route path=":id" element={<Redirect url="pages" />} />
          </Route>
        )}{" "}
        {!V4ResourcesToServe.includes("comments") && (
          <Route path="todos/" element={<Redirect url="pages" />}>
            <Route path=":id" element={<Redirect url="pages" />} />
          </Route>
        )}
      </CustomRoutes>
    </Admin>
  );
};
