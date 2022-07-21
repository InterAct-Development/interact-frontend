import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext, ContextAction } from '../../helpers/Context';
import { LangContext, Languages } from '../../helpers/LanguageProvider';
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Select,
  SelectChangeEvent,
  FormControl,
  MenuItem,
} from '@mui/material';

const MaterialNav = () => {
  const appContext = useContext(AppContext);
  const [locale, setLocale] = useContext(LangContext);
  const { auth } = appContext.state;

  const handleLogout = () => appContext.dispatch({ type: ContextAction.Logout });

  const handleLocale = (e: SelectChangeEvent) => {
    if (setLocale) {
      const value = e.target.value;
      switch (value) {
        case Languages.ENGLISH:
          setLocale(Languages.ENGLISH);
          break;
        case Languages.FRENCH:
          setLocale(Languages.FRENCH);
          break;
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Select
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value={locale}
              label="Language"
              onChange={handleLocale}>
              <MenuItem value={Languages.ENGLISH}>English</MenuItem>
              <MenuItem value={Languages.FRENCH}>French</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InterAct
          </Typography>
          <Link passHref href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link passHref href="/pre-test/pre-assessment">
            <Button color="inherit">Pre-Test</Button>
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
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MaterialNav;
