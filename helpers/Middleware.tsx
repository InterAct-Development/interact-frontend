import { CircularProgress } from "@mui/material";
import Router from "next/router";
import { Container } from "../layout/Globals";

export const invalidToken = () => {
  Router.push("/auth/login");

  // TODO: Ask server if token is expired or malformed
  return;
};

interface MiddlewareProps {
  auth: boolean;
  children: JSX.Element;
}

export const Middleware = ({ children, auth }: MiddlewareProps) => {
  const checkToken = auth ? children : <Loader />;

  return <>{checkToken}</>;
};

export const Loader = () => (
  <Container height="100vh">
    <CircularProgress />
  </Container>
);
