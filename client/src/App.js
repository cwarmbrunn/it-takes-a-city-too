// Import React
import React from "react";

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

// Import Data Table
import DatatablePage from "./components/PostTable";

// COMPONENTS END //

// PAGE START //

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";


// PAGE END //

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Set up App function
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/edit-post" element={<EditPage />} />
              <Route path="/delete-post" element={<DeletePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

// Export App
export default App;
