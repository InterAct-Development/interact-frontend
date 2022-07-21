/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext, ContextAction } from '../../helpers/Context';
import {
  Select,
  SelectChangeEvent,
  MenuItem,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  IconButton
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { LangContext, Languages } from '../../helpers/LanguageProvider';
import { useQuery } from 'react-query';
import { STRAPI_URL } from '../../helpers/Endpoints';

const MaterialNav: React.FC = () => {
  const appContext = useContext(AppContext);
  const [locale, setLocale] = useContext(LangContext);

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



  interface Locale {
    name: string, code: string
  }

  const { data: availableLocales = [] } = useQuery(["localeList"], () => fetch(STRAPI_URL + '/api/i18n/locales').then(res =>
    res.json() as unknown as Locale[]
  ))

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Avatar>
          <PersonOutlineIcon />
        </Avatar>
        <Typography css={css`display:flex;`}>Before My Trip</Typography>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          value={locale}
          label="Language"
          onChange={handleLocale}>
          {availableLocales.map(({ code, name }) => (<MenuItem value={code}>{name}</MenuItem>))}
        </Select>
        <IconButton onClick={handleLogout}>
          <LogoutOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

  );
};

export default MaterialNav;
