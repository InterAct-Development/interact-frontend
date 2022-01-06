import React, { useContext, useEffect, useState } from "react";
import { getData } from "../helpers/Requests";
import { Body } from "../layout/Body";
import Router from "next/router";
import { AppContext } from "../helpers/Context";
import { checkSSR } from "../helpers/checkSSR";

const Profile = () => {
  const authContext = useContext(AppContext);

  const userId = authContext.state.userId !== null && authContext.state.userId;
  const token = checkSSR ? localStorage.getItem("token") : null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData("/users/" + userId, token ?? "").then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          const name: string = data["user"]["name"];
          const email: string = data["user"]["email"];

          setName(name);
          setEmail(email);
        });
      } else {
        console.log("Invalid token");
        Router.push("/");
      }
    });
  });

  return (
    <Body>
      <h1>Profile Page (Protected Route)</h1>
      <p>{"Name: " + name ?? ""}</p>
      <p>{"Email: " + email ?? ""}</p>
    </Body>
  );
};

export default Profile;
