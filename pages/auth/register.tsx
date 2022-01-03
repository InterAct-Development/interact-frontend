import type { NextPage } from 'next'
import styled from '@emotion/styled';
import { Flex } from '../../styles/Mixins';

const Parent = styled.div`
  ${Flex}
`;

const Login: NextPage = () => {
  return (
    <Parent>
      <form>
          
      </form>
    </Parent>
  )
}

export default Login;
