// Import React
import React from "react";
import { NavLink } from "react-router-dom";

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

              {/* Home Page - Link #1  */}
              <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                  <NavLink to="/">
                    <h1 className="nav-link text-decoration-none">
                      It Takes A City Too
                    </h1>
                  </NavLink>

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
                  {/* Donate Button */}
                  <li className="nav-item">
                    <a
                      className="donateBtn nav-link text-decoration-none"
                      href="https://buy.stripe.com/test_4gw2987Y5aldare288"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <>
              {/* USER IS NOT LOGGED IN  */}
              {/* If the user is not logged in - allow them to only see the following */}

              <nav className="navbar navbar-expand-lg">
                {/* Home Page */}
                <NavLink
                  to="/"
                  className="nav-links text-decoration-none text-light"
                >
                  <h1 className=" text-light nav-link text-decoration-none">
                    It Takes A City Too
                  </h1>
                </NavLink>
                <ul className="navbar-nav">
                  {/* Login */}
                  {/* Enables the user to login with existing credentials */}
                  <NavLink
                    to="/login"
                    className="nav-links text-decoration-none text-light"
                  >
                    <li className="nav-item">Log In</li>
                  </NavLink>

                  {/* Sign Up */}
                  {/* Enables the user to sign up with existing credentials */}
                  <NavLink
                    to="/signup"
                    className="nav-links text-decoration-none text-light"
                  >
                    <li className="nav-item">Sign Up</li>
                  </NavLink>

                  {/* Resources */}
                  {/* Allows the user to see the resources page */}
                  <NavLink
                    to="/resources"
                    className="nav-links text-decoration-none text-light"
                  >
                    <li className="nav-item">Resources</li>
                  </NavLink>

                  {/* Donate */}
                  {/* Allows the user to access our donate button via Stripe */}

                  <li className="nav-item">
                    <a
                      className="nav-links text-decoration-none text-light"
                      href="https://buy.stripe.com/test_4gw2987Y5aldare288"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate
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
