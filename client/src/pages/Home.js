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

        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome!</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <p>Hello World!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  if (loggedIn != true) {
    $(document).ready(function () {
      $("#myModal").modal("show");
    });
  }
};

// Export Home
export default Home;
