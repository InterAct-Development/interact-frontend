import React, { FC } from 'react'; // If you have a styled comp and want it functional, use FC (Functional Comp.)!
import { NextPage } from 'next';
import { Body } from '../layout/Body';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// "?" = optional operator  
// "??" = default value
// "interface" = creates props that has types

interface PostProps {
    bgColor: string
}

const Positioning = styled.div<PostProps>`
            height: 100vh;
            background-color: ${({bgColor})=>bgColor};
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
            <Positioning bgColor='red'>
                <h1>Hello</h1>
            </Positioning>
        </Body>
    )
}

export default TestPage;