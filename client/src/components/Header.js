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
        <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6">
          {/* Set up functionality if user is logged in */}
          {Auth.loggedIn() ? (
            <>
              {/* Set up navigation bar items*/}

              <nav className="navbar navbar-expand-lg">
                <a className="text-decoration-none" href="/">
                  It Takes A City Too
                </a>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" href="/logout">
                      {/* Enables the user to logout from their existing session */}
                      Logout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-decoration-none"
                      href="/resources"
                    >
                      {/* Enables the user to view the resources page */}
                      Resources{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <>
              {/* If the user is not logged in - allow them to only see the following */}
              <nav className="navbar navbar-expand-lg">
                <a className="text-decoration-none" href="/">
                  It Takes A City Too
                </a>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" href="/login">
                      {/* Enables the user to login with existing credentials */}
                      Login
                    </a>
                  </li>
                  {/* Enables the user to sign up with existing credentials */}
                  <li className="nav-item">
                    <a
                      className="nav-link text-decoration-none "
                      href="/signup"
                    >
                      Signup
                    </a>
                  </li>
                  {/* Allows the user to see the resources page */}
                  <li className="nav-item">
                    <a
                      className="nav-link text-decoration-none"
                      href="/resources"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

// Export Header
export default Header;
