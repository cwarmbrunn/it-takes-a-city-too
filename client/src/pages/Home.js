// Import React
import React from "react";

// Import useNavigate
import { useNavigate } from "react-router-dom";

// Import Auth
import Auth from "../utils/auth";

// Import useQuery
import { useQuery } from "@apollo/client";
// TODO: KAIJAM - Import the queries we'll need from utils/queries

// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();

  // From Christina: Need to figure out how to insert logged in username - similar to how we did before
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && <div className="col-12 mb-3">Hello [USERNAME HERE] </div>}
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">About Us</h1>
          <p className="text-xl">
            We wanted to create a space for folks to connect and share resources in
            their city. Share a resource, leave a comment about one posted, and
            remember: it takes a city!{" "}
          </p>
        </div>
        </div>
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">Posts</h1>
          <p className="text-xl">
            These posts are here to help and get you through tough times, you can search for certain types or places
          </p>
          <button type="button" onClick={event => window.location.href="/PostPage"}>Add a Resource</button>
              </div>
          </main>
          );
};

          // Export Home
          export default Home;
