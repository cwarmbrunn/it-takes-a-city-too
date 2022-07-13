// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import Auth
import Auth from "../utils/auth";

// Set up Login

const Login = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">Login!!</h1>
          <p className="text-xl">
          Oops, we couldn't find that page.{" "}
          </p>
        </div>
        <div className="py-5 posts">{/* Posts to go here? */}</div>
      </div>
    </main>
  );
};

export default Login;