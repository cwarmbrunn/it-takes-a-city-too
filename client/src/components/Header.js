// Import React
import React from "react";


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
    <header className="bg-secondary mb-2 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg">
        <nav className="bg-gray-600">
          {/* Set up functionality if user is logged in */}
          {Auth.loggedIn() ? (
            <>
              {/* Set up navigation bar items*/}

              <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                  {/* Home Page */}
                  <a className="nav-link text-decoration-none" href="/">
                    It Takes A City Too
                  </a>

                  {/* Logout Option */}
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none" href="/logout">
                      {/* Enables the user to logout from their existing session */}
                      Logout
                    </a>
                  </li>
                  {/* Resources */}
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
                {/* Home Page */}
                <a
                  className="text-decoration-none text-light font-weight-bold"
                  href="/"
                >
                  It Takes A City Too
                </a>
                <ul className="navbar-nav">
                  {/* Login */}
                  <li className="nav-item ">
                    <a className="nav-link text-decoration-none" href="/login">
                      {/* Enables the user to login with existing credentials */}
                      Login
                    </a>
                  </li>
                  {/* Sign Up */}
                  {/* Enables the user to sign up with existing credentials */}
                  <li className="nav-item">
                    <a
                      className="nav-link text-decoration-none "
                      href="/signup"
                    >
                      Sign Up
                    </a>
                  </li>
                  {/* Resources */}
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
