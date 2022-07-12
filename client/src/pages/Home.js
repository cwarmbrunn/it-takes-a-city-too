// Import React
import React from "react";
// Import Auth
import Auth from "../utils/auth";
// Import useQuery
import { useQuery } from "@apollo/client";

import swal from 'sweetalert';
// TODO: KAIJAM - Import the queries we'll need from utils/queries
// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();

  if(loggedIn !== true)
        {
          swal("Please sign in to comment and post");
          };
        
      
  // From Christina: Need to figure out how to insert logged in username - similar to how we did before
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && <div className="col-12 mb-3">Hello [USERNAME HERE] </div>}

        
      </div>
    </main>
  );
};

// Export Home
export default Home;
