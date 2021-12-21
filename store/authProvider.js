import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { refreshAuth } from "./auth.slice";
import { useEffect } from "react";

import SignIn from "../pages/sign-in";
import { useRouter } from "next/router";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const refreshingAuth = useSelector((state) => state.auth.refreshingAuth);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(refreshAuth());
  }, []);

  if (refreshingAuth) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img src="/main_loader.gif" alt="loading..." />
      </div>
    );
  } else {
    // loggedin and isAuthorised
    // --- isAuthorised is controlled on server side ---
    if (user && user.isAuthorised) {
      return <>{children}</>;
    } else {
      return <SignIn />
    }
  }
};

export default AuthProvider;
