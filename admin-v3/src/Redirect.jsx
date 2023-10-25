import React, { useEffect } from "react";
import { Route, useLocation, useParams } from "react-router-dom";

import { V4ResourcesToServe } from "./AdminV3";

export const getV4Pages = () => {
  let v4Pages = [];
  if (V4ResourcesToServe.includes("users")) {
    v4Pages.push(
      <Route
        exact
        path="/users/"
        key="v4UsersListRoute"
        component={() => <Redirect url="users" />}
      />,
      <Route
        path="/users/:id"
        key="v4UserRoute"
        component={() => <Redirect url="users" />}
      />
    );
  }
  if (V4ResourcesToServe.includes("posts")) {
    v4Pages.push(
      <Route
        exact
        path="/posts/"
        key="v4PostsListRoute"
        component={() => <Redirect url="posts" />}
      />,
      <Route
        path="/posts/:id"
        key="v4PostRoute"
        component={() => <Redirect url="posts" />}
      />
    );
  }
  if (V4ResourcesToServe.includes("comments")) {
    v4Pages.push(
      <Route
        exact
        path="/comments/"
        key="v4CommentsListRoute"
        component={() => <Redirect url="comments" />}
      />,
      <Route
        path="/comments/:id"
        key="v4CommentRoute"
        component={() => <Redirect url="comments" />}
      />
    );
  }
  if (V4ResourcesToServe.includes("todos")) {
    v4Pages.push(
      <Route
        exact
        path="/todos/"
        key="v4TodosListRoute"
        component={() => <Redirect url="todos" />}
      />,
      <Route
        path="/todos/:id"
        key="v4TodoRoute"
        component={() => <Redirect url="todos" />}
      />
    );
  }
  return v4Pages;
};

const afemV4Url = `${process.env.REACT_APP_API_URL}/v4/#/`;

const Redirect = (props) => {
  const { url } = props;
  const { id } = useParams();
  const { search } = useLocation();
  useEffect(() => {
    const path = id ? `${url}/${id}` : url;
    window.location.href = `${afemV4Url}${path}${search}`;
  }, [url]);
  return <h5>Redirecting...</h5>;
};

export default Redirect;
