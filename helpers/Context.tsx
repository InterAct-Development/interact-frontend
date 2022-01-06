import React, { FC, createContext, useReducer } from "react";
import { checkSSR } from "../helpers/checkSSR";
import Router from 'next/router';

const initialState = {
  auth: false,
  token: "",
  userId: "",
};

export const AppContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);

      return { ...state, auth: true, userId: action.payload.userId };

      case "LOGOUT":
       localStorage.clear();
       Router.push('/');

       return {...state, auth: false, userId: null}

    default:
      console.log("Action not found.");
      return state;
  }
};

export const GlobalProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    auth: checkSSR ? !!localStorage.getItem("token") : null,

    userId: checkSSR
      ? !!localStorage.getItem("userId")
        ? localStorage.getItem("userId") ?? ""
        : null
      : null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};