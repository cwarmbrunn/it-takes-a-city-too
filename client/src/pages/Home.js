// Import React
import React from "react";

// Import Auth
import Auth from "../utils/auth";
// Import useQuery
import { useQuery } from "@apollo/client";
// TODO: KAIJAM - Import the queries we'll need from utils/queries

// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();
};
