import React, { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Flex } from "../../styles/Mixins";
import { Body } from "../../layout/Body";
import { AppGrid, GridItem } from "../../layout/grid/Grid";
import { Card, Box } from "@mui/material";
import UserForm, { FormValues } from "../../components/form/Form";
import { apiRequest } from "../../helpers/Requests";
import Router from "next/router";
import { AppContext, ContextAction } from "../../helpers/Context";

const FullHeight = styled.div`
  height: 100vh;
  ${Flex}
`;

export const loginAuth = (
  appContext: any,
  values: FormValues,
  setSubmitting: Function
) => {
  apiRequest("/users/login", {
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
   
    // Ensure we have a token and userId before proceeding
    if (token && userId) {
      Router.push("/profile");
    }
  }, [appContext.state]);

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
