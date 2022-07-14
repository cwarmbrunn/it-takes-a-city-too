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
          <nav className="navbar navbar-expand-lg">
            {/* Home Page */}
            <NavLink
              to="/"
              className="nav-links text-decoration-none text-light p-2"
            >
              <h1 className="title-main">It Takes A City Too</h1>
            </NavLink>
            <ul className="navbar-nav">

              {/* Donate */}
              {/* Allows the user to access our donate button via Stripe */}
              {Auth.loggedIn() ? (
                <>
                  {/* USER IS LOGGED IN */}

                  {/* Profile Option */}
                  {/* TODO: Need to display the user profile page */}
                  <NavLink
                    to="/profile"
                    className="nav-links text-decoration-none text-light p-2"
                  >
                    <li className="nav-item"> Profile</li>
                  </NavLink>

                  {/* Logout Option */}
                  {/* TODO: Need to ensure the logout method works properly */}
                  <NavLink
                    to="/"
                    onClick={Auth.logout}
                    className="nav-links text-decoration-none text-light p-2"
                  >
                    <li className="nav-item"> Logout</li>
                  </NavLink>
                </>
              ) : (
                <>
                  {/* USER IS NOT LOGGED IN  */}
                  {/* If the user is not logged in - allow them to only see the following */}
                  {/* Login */}
                  {/* Enables the user to login with existing credentials */}
                  <NavLink
                    to="/login"
                    className="nav-links text-decoration-none text-light p-2"
                  >
                    <li className="nav-item">Log In</li>
                  </NavLink>

                  {/* Sign Up */}
                  {/* Enables the user to sign up with existing credentials */}
                  <NavLink
                    to="/signup"
                    className="nav-links text-decoration-none text-light p-2"
                  >
                    <li className="nav-item">Sign Up</li>


                  </NavLink>
                </>
              )}

              <a
                className="nav-links text-decoration-none text-light"
                href="https://buy.stripe.com/test_4gw2987Y5aldare288"
                target="_blank"
                rel="noreferrer"
              >
                <li className="nav-item p-2">
                  Donate
                </li>
              </a>
            </ul>
          </nav>
        </nav>
      </div>
    </header >
  );
};

// Export Header
export default Header;
