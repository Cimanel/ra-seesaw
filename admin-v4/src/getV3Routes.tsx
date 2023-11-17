import { Route } from "react-router-dom";
import Redirect from "./Redirect";


const V4AvailableResources =
  import.meta.env.VITE_V4_AVAILABLE_RESOURCES.split(",");
const resources = import.meta.env.VITE_ALL_RESOURCES.split(",");
const v3Resources = resources?.filter(
  (resource: string) => !V4AvailableResources?.includes(resource)
);

export const getV3Routes = () => {
  return v3Resources.map((resource: string) => (
    <Route key={`${resource}/`} path={`${resource}/`} element={<Redirect />}>
      <Route key={`${resource}/:id`} path=":id" element={<Redirect />} />
      <Route
        key={`${resource}/:id/show`}
        path=":id/show"
        element={<Redirect />}
      />
    </Route>
  ));
};
