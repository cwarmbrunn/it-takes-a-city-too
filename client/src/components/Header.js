// Import React and Link
import React from "react";
import { Link } from "react-router-dom";

// Import Auth
import Auth from "../utils/auth";

// Set up Header
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // Set up HTML content for Header
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/" className="text-decoration-none">
          <h1 className="text-light flex-row align-center">
            {" "}
            It Takes a City Too 🌆
          </h1>
        </Link>
        <nav className="flex items-center justify-between">
          {/* Set up functionality if user is logged in */}
          {Auth.loggedIn() ? (
            <>
              {/* Set up navigation bar items*/}

              {/* Enables user to go to their profile  */}
              <Link to="/profile">Me</Link>

              {/* Allows the user to logout  */}
              <a href="/" onClick={logout}>
                Logout
              </a>
              {/* Enables user to view the resources page */}
              <Link to="/resources">Resources</Link>
            </>
          ) : (
            <>
              {/* If the user is not logged in - allow them to only see the following */}

              {/* Enables the user to login with existing credentials*/}
              <Link to="/login">Login</Link>
              {/* Enables the user to sign up with new credentials */}
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

// Export Header
export default Header;
