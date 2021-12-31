import type { NextPage } from 'next'
import styled from 'styled-components';
import { Flex } from '../styles/Mixins';

const Parent = styled.div`
  ${Flex({ vertical: 'space-between', direction: 'row'})}
`;

const Child = styled.div`
  height: 200px;
  width: 200px;
  background: var(--primaryColor);
`;

const Home: NextPage = () => {
  return (
    <Parent>
      <Child/>
      <Child/>
      <Child/>
    </Parent>
  )
}

export default Home
