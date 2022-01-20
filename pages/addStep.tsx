import * as React from 'react';
import type { NextPage } from "next";

import { Body } from '../layout/Body';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const AddStep: NextPage = () => {
    return (
        <Body>
            <Box sx={{ flexGrow: 1, margin: 1 }}>
                <Grid container>
                    <>
                        <h1>Add Step Form</h1>
                    </>
                </Grid>
            </Box>
        </Body>
    );
}

export default AddStep;