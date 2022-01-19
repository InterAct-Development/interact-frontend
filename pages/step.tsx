import * as React from 'react';
import type { NextPage } from "next";

import { Body } from '../layout/Body';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { deepOrange } from '@mui/material/colors';

// Text
// Images
// Video?

const ViewStep: NextPage = () => {

    return (
        <>
            <Body>
                <Box>
                    <h1>Step 1</h1>
                </Box>
            </Body>
        </>
    );
}

export default ViewStep;