import React, { FC, createContext, useReducer } from "react";
import { checkSSR } from "./helpers";
import Router from "next/router";

interface ContextState {
  auth: boolean;
  token?: string | null;
  userId?: string | null;
}

export enum ContextAction {
  Login = "LOGIN",
  Logout = "LOGOUT",
}

const initialState = {
  auth: false,
  token: undefined,
  userId: "",
};

export const AppContext = createContext<{
  state: ContextState;
  dispatch: React.Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

interface LoginAction {
  type: ContextAction.Login;
  payload: {
    token: string;
    userId: string;
  };
}
interface LogoutAction {
  type: ContextAction.Logout;
}

type AuthActions = LoginAction | LogoutAction;

const authReducer = (
  state: ContextState,
  action: AuthActions
): ContextState => {
  switch (action.type) {
    case ContextAction.Login:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);

      return { ...state, auth: true, userId: action.payload.userId };

    case ContextAction.Logout:
      localStorage.clear();
      Router.push("/auth/login");

      return { ...state, auth: false, userId: undefined };

    default:
      console.log("Action not found.");
      return state;
  }
};

export const GlobalProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    auth: checkSSR ? !!localStorage.getItem("token") : false,
    userId: checkSSR ? localStorage.getItem("userId") : undefined,
    token: checkSSR ? localStorage.getItem("token") : undefined
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};