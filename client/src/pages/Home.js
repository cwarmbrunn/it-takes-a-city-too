// Import React
import React from "react";

// Import Auth
import Auth from "../utils/auth";

// Import Footer
import Footer from "../components/Footer";

import Header from "../components/Header";

// Import useQuery
import { useQuery } from "@apollo/client";
// TODO: KAIJAM - Import the queries we'll need from utils/queries

// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            {/* Add in Header */}
            <Header />
            {/* Add in Footer */}
            <Footer />
          </div>
        )}
      </div>
    </main>
  );
};

// Export Home
export default Home;
