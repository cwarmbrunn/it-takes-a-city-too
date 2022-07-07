// Import React
import React from "react";

// Import Router, Routes, and Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import ApolloClient, InMemoryCache, and ApolloProvider
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Import setContext
import { setContext } from "@apollo/client/link/context";

// COMPONENTS START //

// Import Header
import Header from "./components/Header";

// Import Footer
import Footer from "./components/Footer";

// COMPONENTS END //

// PAGES START //

// Import Home
import Home from "./pages/Home";

// Import Login
import Login from "./pages/Login";

// Import Signup
import Signup from "./pages/Signup";

// Import Profile
import Profile from "./pages/Profile";

// Import Resource
import Resource from "./pages/Resource";

// PAGES END //
