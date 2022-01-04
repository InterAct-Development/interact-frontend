import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { Flex } from "../../styles/Mixins";
import { Body } from "../../layout/Body";
import { AppGrid, GridItem } from "../../layout/grid/Grid";
import { Card, Box } from "@mui/material";
import UserForm from "../../components/form/Form";
import Router from "next/router";
import postData from "../../helpers/PostData";

const FullHeight = styled.div`
  height: 100vh;
  ${Flex}
`;

export const registerAuth = (values: any, setSubmitting: Function) => {
  postData("/users/register", {
    name: values.name,
    age: values.age,
    phone: values.phone,
    email: values.email,
    password: values.password,
  }).then((_) => {
    setSubmitting(false);
    Router.push("/login");
  });
};

const Register: NextPage = () => (
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

export default Register;
