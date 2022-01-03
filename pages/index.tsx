import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { Flex } from '../styles/Mixins';
import Link from 'next/link';
import { Body } from '../layout/Body';
import { Grid, GridItem } from '../layout/grid/Grid';
import Button from '@mui/material/Button';

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
              <Link passHref href="/auth/register">
                <Button variant="contained">Register</Button>
              </Link>
                <Button variant="contained">Login</Button>
            </Child>
          </Container>
        </GridItem>
      </Grid>
    </Body>
  )
}

export default Home;
