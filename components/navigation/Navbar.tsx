import Link from 'next/link';
import { Button, AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MaterialNav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        InterAct
                    </Typography>
                    <Link passHref href="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link passHref href="/auth/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link passHref href="/auth/register">
                        <Button color="inherit">Register</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MaterialNav;