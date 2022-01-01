import type { NextPage } from 'next'
import styled from 'styled-components';
import { Flex } from '../styles/Mixins';
import Link from 'next/link';
import { Body } from '../layout/Body';
import { Grid, GridItem } from '../layout/grid/Grid';

const Container = styled.div`
  ${Flex}
`;

const Child = styled.div`
  ${Flex({ direction: 'row' })};
  gap: 10px;
`;

const Home: NextPage = () => {
  return (
    <Body>
      <Grid>
        <GridItem>
          <Container>
            <h1>InterAct Home</h1>
            <Child>
            <Link passHref href="/register">
              <button>Register</button>
            </Link>
              <button>Login</button>
            </Child>
          </Container>
        </GridItem>
      </Grid>
    </Body>
  )
}

export default Home;
