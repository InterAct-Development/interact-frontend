import React, { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import { Body } from "../../layout/Body";
import { Card, Box } from "@mui/material";
import UserForm, { FormValues } from "../../components/form/Form";
import { apiRequest } from "../../helpers/Requests";
import Router from "next/router";
import { AppContext, ContextAction } from "../../helpers/Context";
import { Container } from "../../layout/Globals";
import { Middleware } from "../../helpers/Middleware";
import { BASE_URL } from "../../helpers/Endpoints";

export const loginAuth = (
  appContext: any,
  values: FormValues,
  setSubmitting: Function
) => {
  apiRequest(BASE_URL + "/users/login", {
    data: {
      email: values.email,
      password: values.password,
    },
    method: "POST",
  }).then((res: Response) => {
    if (res.status === 200) {
      res.json().then((data) => {
        const userId = data["id"];
        const token = data["token"];

        appContext.dispatch({
          type: ContextAction.Login,
          payload: {
            token: token,
            userId: userId,
          },
        });

        setSubmitting(false);
      });
    } else {
      setSubmitting(false);
    }
  });
};

const Login: NextPage = () => {
  const [isLogin] = useState(true);
  const appContext = useContext(AppContext);

  useEffect(() => {
    const { token, userId } = appContext.state;

    // Ensures we have a token and userId before proceeding
    // Also acts as middleware
    if (token && userId) {
      Router.push("/profile");
    }
  }, [appContext.state]);

  return (
    <Body>
      <Middleware auth={!appContext.state.auth}>
        <Container height="100vh">
          <Box sx={{ maxWidth: 600 }}>
            <Card variant="outlined">{UserForm(isLogin)}</Card>
          </Box>
        </Container>
      </ Middleware>
    </Body>
  );
};

export default Login;
