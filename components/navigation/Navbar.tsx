import Link from "next/link";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../../helpers/Context";
import Router from "next/router";

const MaterialNav = () => {
  const appContext = useContext(AppContext);

  const handleLogout = () => appContext.dispatch({ type: "LOGOUT" });

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
          {!appContext.state.auth && (
          <Link passHref href="/auth/login">
            <Button color="inherit">Login</Button>
          </Link>
          )}
          {!appContext.state.auth && (
            <Link passHref href="/auth/register">
              <Button color="inherit">Register</Button>
            </Link>
          )}
          {appContext.state.auth && (
            <Link passHref href="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
          )}
          {appContext.state.auth && (
              <Button onClick={handleLogout} color="inherit">Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MaterialNav;
