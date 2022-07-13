// Import React
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// Import Router, Routes, and Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import ApolloClient, InMemoryCache, and ApolloProvider
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Import setContext
import { setContext } from "@apollo/client/link/context";

// COMPONENTS START //

// Import Header
import Header from "./components/Header";

// Import Footer
import Footer from "./components/Footer";

// COMPONENTS END //
import MyTable from "./components/PostTable";
// PAGE START //

import PostPage from "./pages/PostPage";

// PAGE END //

// Set up App function
function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <PostPage />
          // <MyTable/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Export App
export default App;
