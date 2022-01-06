import React, { FC } from 'react'; // If you have a styled comp and want it functional, use FC (Functional Comp.)!
import { NextPage } from 'next';
import { Body } from '../layout/Body';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// "?" = optional operator  
// "??" = default value
// "interface" = creates props that has types

// interface PostProps {
//     bgColor: string
// }

// const Positioning: FC<PostProps> = ({ bgColor, children }) => { 
//     return (
//         styled.div`
//             height: 100vh;
//             background-color: ${bgColor};
//             display: flex;
//             align-items: center;
//             justify-content: center;
// `);
// }

const Positioning = styled.div`
    height: 100vh;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface TestPageProps {
    john: string,
    shane: string,
    age?: number
}

export const TestPage = ({ john, shane, age }: TestPageProps) => {
    return (
        <Body>
            <Positioning>
                <h1>Hello</h1>
            </Positioning>
        </Body>
    )
}

export default TestPage;