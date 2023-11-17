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

const V4AvailableResources = import.meta.env.VITE_V4_AVAILABLE_RESOURCES.split(
  ","
);

const resources = import.meta.env.VITE_ALL_RESOURCES.split(",");
const v3Resources = resources.filter(
  (resource: string) => !V4AvailableResources.includes(resource)
);
export const apiUrl = import.meta.env.VITE_API_URL;

export const AdminV4 = () => {
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
        {v3Resources.map((resource: string) => (
          <Route
            key={`${resource}/`}
            path={`${resource}/`}
            element={<Redirect />}
          >
            <Route key={`${resource}/:id`} path=":id" element={<Redirect />} />
            <Route
              key={`${resource}/:id/show`}
              path=":id/show"
              element={<Redirect />}
            />
          </Route>
        ))}
      </CustomRoutes>
    </Admin>
  );
};
