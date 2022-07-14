// Import React
import React from "react";

// Import Auth
import Auth from "../utils/auth";

// Import useQuery
import { useQuery } from "@apollo/client";
import {QUERY_ALL_POSTS, QUERY_ALL_USERS, QUERY_ONE_USER, QUERY_RESOURCES, QUERY_TAGS,
QUERY_ALL_LOCATIONS, QUERY_CURRENT_USER} from "../utils/queries"
// Set up Home function
const Home = () => {
  // Set up a constant for being loggedIn
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  const userData = data?.me || {};

  // From Christina: Need to figure out how to insert logged in username - similar to how we did before
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn ? <div className="col-12 mb-3">Hello {userData.username} </div> : <div className="col-12 mb-3">Hello Guest </div> }
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">About Us</h1>
          <p className="text-xl">
            We wanted to create a space folks to connect and share resources in
            their city. Share a resource, leave a comment about one posted, and
            remember: it takes a city!{" "}
          </p>
        </div>
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">Posts</h1>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Shelter</a>
            <a class="dropdown-item" href="#">Food Bank</a>
            <a class="dropdown-item" href="#">Job Help</a>
          </div>
          <p className="text-xl">
            These post are here to help and get you through tough times, you can search for certain types or places
          </p>
          <input class="form-control" id="myInput" type="text" placeholder="Search.."></input>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody id="myTable">


                </tbody>
              </table>
              </div>
            </div>
          </main>
          );
};

          // Export Home
          export default Home;
