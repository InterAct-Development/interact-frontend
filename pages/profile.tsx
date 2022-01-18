import React, { useContext, useEffect, useState } from "react";
import { apiRequest } from "../helpers/Requests";
import { Body } from "../layout/Body";
import { AppContext } from "../helpers/Context";
import { NextPage } from "next";
import { invalidToken, Middleware } from "../helpers/Middleware";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Avatar from '../components/avatar/Avatar';
import VerticalLinearStepper from "../components/stepper/Stepper";

const Profile: NextPage = () => {
  const appContext = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const { auth, userId, token } = appContext.state;
    let isMounted: boolean = true;

    // Look at a better way to do this.
    if (!auth) invalidToken();

    if (token && userId) {
      apiRequest("/users/" + userId, {
        token: token || "",
        method: "GET",
      }).then((res: Response) => {
        if (res.status === 200) {
          res.json().then((data) => {
            const name: string = data["user"]["name"];
            const email: string = data["user"]["email"];

            if (isMounted) {
              setName(name);
              setEmail(email);
            }

            // Cleanup
            return () => {
              isMounted = false;
            };
          });
        }
      });
    }
  }, [appContext]);

  return (
    <Body>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Middleware auth={appContext.state.auth}>
            <>

              <h1>Profile Page (Protected Route)</h1>

              <Grid xs={4}>
                <Avatar />
              </Grid>

              <Grid xs={8}>
                <p>{"Name: " + name ?? ""}</p>
                <p>{"Email: " + email ?? ""}</p>
              </Grid>

              <Grid xs={12}>
                <VerticalLinearStepper />
              </Grid>
              
            </>
          </Middleware>
        </Grid>
      </Box>
    </Body >
  );
};

export default Profile;
