// Import React
import React from "react";

// Import useNavigate
import { useNavigate } from "react-router-dom";

// Import Auth
import Auth from "../utils/auth";

// Import useQuery
import { useQuery } from "@apollo/client";
import {
  QUERY_ALL_POSTS,
  QUERY_ALL_USERS,
  QUERY_ONE_USER,
  QUERY_RESOURCES,
  QUERY_TAGS,
  QUERY_ALL_LOCATIONS,
  QUERY_CURRENT_USER,
} from "../utils/queries";
// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  const userData = data?.me || {};

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn ? (
          <div className="col-12 mb-3">
            <h1 className="text-warning">Hello </h1> {userData.username}!{" "}
          </div>
        ) : (
          <div className="col-12 mb-3">Hello Guest </div>
        )}
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">About Us</h1>
          <p className="text-xl">
            We wanted to create a space for folks to connect and share resources
            in their city. Share a resource, leave a comment about one posted,
            and remember: it takes a city!{" "}
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
};

// Export Home
export default Home;
