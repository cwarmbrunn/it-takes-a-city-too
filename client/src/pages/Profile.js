// Import React
import React from "react";

// Import Navigate and useParams
import { Navigate, useParams } from "react-router-dom";

// Import useQuery and useMutation
import { useQuery, useMutation } from "@apollo/client";

// TODO: KAIJAM - Import queries we'll need!

// Import Auth
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  // TODO - Queries to go here?
};

// Set up constant user
const user = data?.me || data?.me || {};

// Navigate to personal profile page if the username is yours and accurate
if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  return <Navigate to="/profile:username" />;
}

// If loading, display the following content
if (loading) {
  return <div>Loading...hang tight!</div>;
}

// If user is not logged in, display the following content
if (!user?.username) {
  return (
    <h2>
      You need to be logged in to see this! Use the navigation links above to
      sign up or log in!
    </h2>
  );
}

const handleClick = async () => {
  try {
    // Try code to go here - will await
  } catch (e) {
    // Set up console log to catch any errors
    console.error(e);
  }
};
// Export Profile
export default Profile;
