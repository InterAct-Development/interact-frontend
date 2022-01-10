import React, { useContext, useEffect, useState } from "react";
import { apiRequest } from "../helpers/Requests";
import { Body } from "../layout/Body";
import Router from "next/router";
import { AppContext } from "../helpers/Context";
import { NextPage } from "next";

import StepsSummary from '../components/steps/steps_summary'

const Profile: NextPage = () => {
  const appContext = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const badToken = () => {
    console.log("Invalid token");
    Router.push("/auth/login");
  };

  // Look into React Router.pre()

  useEffect(() => {
    const { userId, token } = appContext.state;
    let isMounted: boolean = true;
    // if (!token) badToken();

    if (userId) {
      apiRequest("/users/" + userId, {
        token: token || "",
        method: "GET",
      }).then((res: Response) => {
        if (res.status == 200) {
          res
            .json()
            .then((data) => {
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
            })
            .catch((_) => {
              badToken();
            });
        }
      });
    }
  }, [appContext]);

  return (
    <Body>
      <h1>Profile Page (Protected Route)</h1>
      <p>{"Name: " + name ?? ""}</p>
      <p>{"Email: " + email ?? ""}</p>

      <StepsSummary />
    </Body>
  );
};

export default Profile;
