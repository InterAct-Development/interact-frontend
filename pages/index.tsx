import React, { useContext } from "react";
import type { NextPage } from "next";
import { Body } from "../layout/Body";
import { AppGrid } from "../layout/grid/Grid";
import { Fab } from "@mui/material";
import { Shortcut, Logout } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Flex } from "../styles/Mixins";
import { AppContext } from "../helpers/Context";

const FloatingActionButton = styled.div`
  ${Flex({ horizontal: "flex-end", vertical: "end" })}
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 15px;
`;

const Home: NextPage = () => {
  const appContext = useContext(AppContext);
  let isAuth = appContext.state.auth;

  return (
    <>
      <Body>
        <section>
          <h1>
            Homepage
          </h1>
          
          <AppGrid>
            <FloatingActionButton>
              <Fab color="primary" aria-label="add">
                {!isAuth ? <Shortcut /> : <Logout />}
              </Fab>
            </FloatingActionButton>
          </AppGrid>
        </section>
      </Body>

    </>
  );
};

export default Home;
