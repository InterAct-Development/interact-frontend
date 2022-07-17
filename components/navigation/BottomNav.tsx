import { useState, useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AppContext } from "../../helpers/Context";
import { useRouter } from "next/router";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FlightLandRoundedIcon from "@mui/icons-material/FlightLandRounded";

interface MenuItem {
  label: string;
  icon: JSX.Element;
  route: string;
}

interface BottomNavProps {}

export const BottomNav: React.FC<BottomNavProps> = () => {
  const [navIndex, setNavIndex] = useState(0);
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
      route: "before",
    },
    {
      label: "During",
      icon: <AccessTimeRoundedIcon />,
      route: "during",
    },
    {
      label: "After",
      icon: <FlightLandRoundedIcon />,
      route: "after",
    },
  ];

  const router = useRouter();
  
  const menu = (auth ? defaultMenu : authMenu).map((item, i) => (
      <BottomNavigationAction 
        key={i} 
        label={item.label} 
        icon={item.icon} 
        onClick={() => router.push(item.route)}/>
  ));

  return (
    <BottomNavigation
      showLabels
      value={navIndex}
      onChange={(event, newIndex) => setNavIndex(newIndex)}
    >
      {menu}
    </BottomNavigation>
  );
};
