import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Flex } from "../../styles/Mixins";
import { Body } from "../../layout/Body";
import { AppGrid, GridItem } from "../../layout/grid/Grid";
import { Card, Box } from "@mui/material";
import UserForm from "../../components/form/Form";
import postData from "../../helpers/Requests";
import Router from "next/router";

const FullHeight = styled.div`
  height: 100vh;
  ${Flex}
`;

export const loginAuth = (
  appContext: any,
  values: any,
  setSubmitting: Function
) => {
  postData("/users/login", {
    email: values.email,
    password: values.password,
  }).then((res) => {
    if (res.status == 200) {
      res.json().then((data) => {
        const userId = data["id"];
        const token = data["token"];
        delete data["token"];

        appContext.dispatch({
          type: "LOGIN",
          payload: {
            token: token,
            userId: userId,
          },
        });

        setSubmitting(false);
        Router.push("/profile");
      });
    } else {
      setSubmitting(false);
    }
  });
};

const Login: NextPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(true);
  }, []);

  return (
    <>
      <Body>
        <AppGrid>
          <GridItem>
            <FullHeight>
              <Box sx={{ maxWidth: 600 }}>
                <Card variant="outlined">{UserForm(isLogin)}</Card>
              </Box>
            </FullHeight>
          </GridItem>
        </AppGrid>
      </Body>
    </>
  );
};

export default Login;