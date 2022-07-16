import React from 'react';
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_CURRENT_USER } from "../utils/queries"

const NotFound = () => {
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  const userData = data?.me || {};

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn ? <div className="col-12 mb-3">Hello {Auth.getProfile().data.username} </div> : <div className="col-12 mb-3">Hello Guest </div> }
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">Not Found!</h1>
          <p className="text-xl">
          Oops, we couldn't find that page.{" "}
          </p>
        </div>
        <div className="py-5 posts">{/* Posts to go here? */}</div>
      </div>
    </main>
  );
};

export default NotFound;
