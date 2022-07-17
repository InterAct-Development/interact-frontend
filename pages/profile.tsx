import React, { useContext, useEffect, useState } from "react";
import { NextPage } from "next";
import { apiRequest } from "../helpers/Requests";
import { Body } from "../layout/Body";
import { AppContext } from "../helpers/Context";
import { invalidToken, Middleware } from "../helpers/Middleware";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BASE_URL } from "../helpers/Endpoints";

const Profile: NextPage = () => {
  const appContext = useContext(AppContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Must be dynamic and added to the db. Static for demo purposes.
  const biography: string =
    "Velit labore ut aliquip ea reprehenderit dolor est dolor esse nulla. Officia eu non incididunt cillum amet qui nostrud laboris excepteur labore mollit.";

  useEffect(() => {
    const { auth, userId, token } = appContext.state;

    // Look at a better way to do this.
    if (!auth) invalidToken();

    if (token && userId) {
      apiRequest(BASE_URL + "/users/" + userId, {
        token: token || "",
        method: "GET",
      }).then((res: Response) => {
        if (res.status === 200) {
          res.json().then((currentUser) => {
            const userAttributes: any = currentUser.user;
            setUser(userAttributes);
          });
        }
      });
    }
  }, [appContext]);

  return (
    <Body>
      <Middleware auth={appContext.state.auth}>
        <Box sx={{ flexGrow: 1, margin: 1 }}>
          <Grid container>
            <>
              <Grid xs={12}>
                <h1>Profile Page (Protected Route)</h1>
              </Grid>
              <Grid xs={8}>
                <h3>{"Name: " + user.name}</h3>
                <p>{"Email: " + user.email}</p>
                <p>{"Role: " + user.role}</p>
              </Grid>

              <Grid xs={12}>
                <p>
                  Bio:
                  <br />
                  {biography}
                </p>
              </Grid>
              <Grid xs={12} style={{ marginTop: 5 }}>
              </Grid>
            </>
          </Grid>
        </Box>
      </Middleware>
    </Body>
  );
};

export default Profile;
