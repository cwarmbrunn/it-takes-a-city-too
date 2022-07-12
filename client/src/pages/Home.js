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

  // From Christina: Need to figure out how to insert logged in username - similar to how we did before
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && <div className="col-12 mb-3">Hello [USERNAME HERE] </div>}
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">About Us</h1>
          <p className="text-xl">
            We wanted to create a space folks to connect and share resources in
            their city. Share a resource, leave a comment about one posted, and
            remember: it takes a city!{" "}
          </p>
        </div>
        <div className="py-5 posts">{/* Posts to go here? */}</div>
      </div>
    </main>
  );
};

// Export Home
export default Home;
