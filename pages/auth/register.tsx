import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { Body } from "../../layout/Body";
import { Card, Box } from "@mui/material";
import UserForm, { FormValues } from "../../components/form/Form";
import Router from "next/router";
import { apiRequest } from "../../helpers/Requests";
import { AppContext } from "../../helpers/Context";
import { Container } from "../../layout/Globals";
import { Middleware } from "../../helpers/Middleware";

export const registerAuth = (values: FormValues, setSubmitting: Function) => {
  apiRequest("/users/register", {
    data: {
      name: values.name,
      age: values.age,
      phone: values.phone,
      email: values.email,
      password: values.password,
    },
    method: "POST",
  }).then((res: Response) => {
    if (res.status === 201) {
      setSubmitting(false);
      Router.push("/auth/login");
    } else {
      setSubmitting(false);
    }
  });
};

const Register: NextPage = () => {
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
    <>
      <Body>
        <Middleware auth={!appContext.state.auth}>
          <Container height="100vh">
            <Box sx={{ maxWidth: 600 }}>
              <Card variant="outlined">{UserForm()}</Card>
            </Box>
          </Container>
        </Middleware>
      </Body>
    </>
  );
};

export default Register;
