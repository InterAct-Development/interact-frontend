import type { NextPage } from 'next'
import styled from 'styled-components';

const Title = styled.h1`
  color: rgb(255, 0, 0);
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title>Next.js Application</Title>
    </div>
  )
}

export default Home
