import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';

export default function VariantAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                sx={{ 
                    bgcolor: deepOrange[500], 
                    width: 100, 
                    height: 100, 
                    marginLeft: 1 }}
                variant="square"
            />
        </Stack>
    );
}