import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { deepOrange } from '@mui/material/colors';

const Footer = () => {
    return (
        <Box>
            {/* <hr sx={{ bgcolor: deepOrange[500], height: 100 }} /> */}
            <hr style={{ backgroundColor: deepOrange[500], height: 3 }} />
            <p>Footer</p>
        </Box>
    )
}

export default Footer; 