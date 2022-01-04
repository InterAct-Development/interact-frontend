import * as React from "react";
import type { NextPage } from "next";
import { Body } from "../layout/Body";
import { AppGrid } from "../layout/grid/Grid";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import { Flex } from "../styles/Mixins";

const FloatingActionButton = styled.div`
  ${Flex({ horizontal: "flex-end", vertical: "end" })}
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 15px;
`;

const Home: NextPage = () => {
  return (
    <>
      <Body>
        <section>
          <AppGrid>
            <FloatingActionButton>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </FloatingActionButton>
          </AppGrid>
        </section>
      </Body>
    </>
  );
};

export default Home;
