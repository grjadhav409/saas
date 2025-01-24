// LoginButton.jsx
"use client";

import Link from "next/link";
import React from "react";

const ButtonLogin = ({ isLoggedin, username, isNav }) => {
  if (isLoggedin) {
    return (
      <div>
        <Link className="btn btn-primary" href="/dashboard">
          Welcome Back {username}
        </Link>
      </div>
    );
  }
  if (isNav) {
    return (
      <Link href="/login">
        <button className="text-gray-700 hover:text-blue-500">Login</button>
      </Link>
    );
  }
  return <button className="btn btn-primary">Login</button>;
};

export default ButtonLogin;
