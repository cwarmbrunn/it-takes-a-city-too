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
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@mail.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@greatstuff.com</td>
      </tr>
      <tr>
        <td>Anja</td>
        <td>Ravendale</td>
        <td>a_r@test.com</td>
      </tr>
    </tbody>
  </table>
              </div>
          </main>
          );
};

          // Export Home
          export default Home;
