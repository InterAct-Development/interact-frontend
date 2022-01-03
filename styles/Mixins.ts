import { css } from '@emotion/react';

interface FlexProps {
    direction?: string
    vertical?: string,
    horizontal?: string
}

export const Flex = ({ direction, vertical, horizontal}: FlexProps) => css`
    display: flex;
    flex-direction: ${direction ?? 'column'};
    justify-content: ${vertical ?? 'center'};
    align-items: ${horizontal ?? 'center'};
`;