import styled from "@emotion/styled";
import { Flex } from "../styles/Mixins";

interface ContainerProps {
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height ?? '100%'};
  ${Flex({})}
`;
