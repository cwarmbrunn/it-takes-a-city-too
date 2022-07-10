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
import Resource from "./pages/Resources";

// PAGES END //

// Set up HTTP Link
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Set up authLink
const authLink = setContext((_, { headers }) => {
  // Set up token
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Set up client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="/resources" element={<Resources />} /> */}
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
