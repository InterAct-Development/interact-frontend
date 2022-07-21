import { useState, useContext } from "react";
import {
  BottomNavigation as MuiBottomNav,
  BottomNavigationAction as MuiBottomNavAction,
} from "@mui/material";
import { AppContext } from "../../helpers/Context";
import { useRouter } from "next/router";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";
import { styled } from "@mui/material/styles";

interface MenuItem {
  label: string;
  icon: JSX.Element;
  route: string;
}

interface BottomNavProps { }

export const BottomNav: React.FC<BottomNavProps> = () => {
  const appContext = useContext(AppContext);
  const { auth } = appContext.state;

  const authMenu: MenuItem[] = [
    {
      label: "Home",
      icon: <HouseRoundedIcon />,
      route: "/",
    },
    {
      label: "Login",
      icon: <PersonRoundedIcon />,
      route: "/auth/login",
    },
    {
      label: "Register",
      icon: <PersonAddAltRoundedIcon />,
      route: "/auth/register",
    },
  ];

  const defaultMenu: MenuItem[] = [
    {
      label: "Before",
      icon: <FlightTakeoffRoundedIcon />,
      route: "/pre-test/before-trip",
    },
    {
      label: "During",
      icon: <AccessTimeRoundedIcon />,
      route: "/profile",
    },
    {
      label: "After",
      icon: <FlightLandRoundedIcon />,
      route: "/profile",
    },
  ];

  const BottomNavigationAction = styled(MuiBottomNavAction)(`
    &.Mui-selected {
    background: #3f50b5;
    color: white;
  }
`);

  const BottomNavigation = styled(MuiBottomNav)(`
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px 1px 15px 0px #0000004d;
`);

  const router = useRouter();
  const currentRoute = router.pathname;

  const menu = (auth ? defaultMenu : authMenu).map((item, i) => (
    <BottomNavigationAction
      key={i}
      value={item.route}
      label={item.label}
      icon={item.icon}
      onClick={() => router.push(item.route)}
    />
  ));

  return (
    <BottomNavigation
      showLabels
      value={currentRoute}
    >
      {menu}
    </BottomNavigation>
  );
};
