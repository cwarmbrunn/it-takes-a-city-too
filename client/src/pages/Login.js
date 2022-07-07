// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import LOGIN_USER from Mutations.js
// import { LOGIN_USER } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

// Set up Login
const Login = (props) => {
  // Set up login formState
  const [formState, setFormState] = useState({ email: "", password: "" });
  // const [login, { error }] = useMutation(LOGIN_USER);
};

export default Login;
