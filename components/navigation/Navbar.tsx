import Link from "next/link";
import React, { useContext } from "react";
import { AppContext, ContextAction } from "../../helpers/Context";

import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepOrange } from '@mui/material/colors';

const MaterialNav = () => {
  const appContext = useContext(AppContext);
  const { auth } = appContext.state;

  const handleLogout = () => { appContext.dispatch({ type: ContextAction.Logout }); }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: deepOrange[500] }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InterAct
          </Typography>
          <Link passHref href="/">
            <Button color="inherit">Home</Button>
          </Link>
          {!auth && (
            <Link passHref href="/auth/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
          {!auth && (
            <Link passHref href="/auth/register">
              <Button color="inherit">Register</Button>
            </Link>
          )}
          {auth && (
            <Link passHref href="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
          )}
          {auth && (
            <Button onClick={handleLogout} color="inherit">Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MaterialNav;
