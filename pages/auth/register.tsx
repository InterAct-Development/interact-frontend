import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Flex } from "../../styles/Mixins";
import { Body } from "../../layout/Body";
import { AppGrid, GridItem } from "../../layout/grid/Grid";
import { Card, Box } from "@mui/material";
import UserForm, { FormValues } from "../../components/form/Form";
import Router from "next/router";
import { apiRequest } from "../../helpers/Requests";
import { AppContext } from "../../helpers/Context";

const FullHeight = styled.div`
  height: 100vh;
  ${Flex}
`;

export const registerAuth = (values: FormValues, setSubmitting: Function) => {
  apiRequest("/users/register", {
    data: {
      name: values.name,
      age: values.age,
      phone: values.phone,
      email: values.email,
      password: values.password,
    },
    method: "POST"
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
  const { auth } = appContext.state;

  useEffect(() => {
    if (auth) Router.push("/");
  }, [auth]);

  return (
    <>
      <Body>
        <AppGrid>
          <GridItem>
            <FullHeight>
              <Box sx={{ maxWidth: 600 }}>
                <Card variant="outlined">{UserForm()}</Card>
              </Box>
            </FullHeight>
          </GridItem>
        </AppGrid>
      </Body>
    </>
  );
};

export default Register;