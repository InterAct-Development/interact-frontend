import React, { useContext, useEffect, useState } from "react";
import { apiRequest } from "../helpers/Requests";
import { Body } from "../layout/Body";
import Router from "next/router";
import { AppContext } from "../helpers/Context";
import { NextPage } from "next";
import VerticalLinearStepper from "../components/stepper/Stepper";
import { checkSSR } from "../helpers/helpers";

const Profile: NextPage = () => {
  const appContext = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const { userId } = appContext.state;
    // const { userId, token } = appContext.state;
    const token = checkSSR ? localStorage.getItem("token") : undefined;
    let isMounted: boolean = true;

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
              // Handle error
            });
        }
      });
    }
  }, [appContext.state]);

  return (
    <Body>
      <h1>Profile Page (Protected Route)</h1>
      <p>{"Name: " + name ?? ""}</p>
      <p>{"Email: " + email ?? ""}</p>

      <VerticalLinearStepper />
    </Body>
  );
};

export default Profile;
