// Import React
import React from "react";

// Import Navigate and useParams
import { Navigate, useParams } from "react-router-dom";

// Import useQuery and useMutation
import { useQuery, useMutation } from "@apollo/client";

// TODO: KAIJAM - Import queries we'll need!
import { QUERY_ONE_USER, QUERY_CURRENT_USER } from "../utils/queries";
// Import Auth
import Auth from "../utils/auth";
import PostList from '../components/PostList';
import PostPage from "../components/PostPage";

const Profile = (props) => {
  const { username: userParam } = useParams();
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(userParam ? QUERY_ONE_USER : QUERY_CURRENT_USER, {
    variables: { username: userParam }
  });
  // assign userdata to the current user or linked user or an empty array based on response and params
  const userData = data?.me || data?.user || {};
  console.log(userData.posts);

  // navigate to personal profile page if username is yours
  // replace declared after Navigate to overwrite the /profile/username location from history
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate replace to="/profile" />;
  }

  // If loading, display the following content
  if (loading) {
    return <div>Loading...hang tight!</div>;
  }

  // If the profile doesn't exiat, display the following content
  if (!userData?.username) {
    return (
      <main>
        <div className="flex-row justify-space-between">
          {loggedIn ? <div className="col-12 mb-3">Hello {Auth.getProfile().data.username} </div> : <div className="col-12 mb-3">Hello Guest </div>}
          <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
            <h1 className="text-decoration-underline">No Such User!</h1>
            <div className="card mb-3">
              <p className="card-header">{userParam} does not exist.</p>
              <p className="text-xl card-body">
                Sorry, you're looking for someone that ain't here! {" "}
              </p>
            </div>
          </div>
          <div className="py-5 posts">{/* Posts to go here? */}</div>
        </div>
      </main>
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

  return (
    <>
      <main>
        <div className="flex-row justify-space-between">
          {loggedIn ? <div className="col-12 mb-3">Hello {Auth.getProfile().data.username} </div> : <div className="col-12 mb-3">Hello Guest </div>}
          <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
            <PostPage />
          </div>
          <div className="py-5 posts">{/* Posts to go here? */}</div>
        </div>
      </main>

      <main>
        <div className="flex-row justify-space-between">
          <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
            <h1 className="text-decoration-underline">{userData.username}'s Profile!</h1>
            <p className="text-xl">
              <PostList posts={userData.posts} title={`${userData.username} `} />
            </p>
          </div>
          <div className="py-5 posts">{/* Posts to go here? */}</div>
        </div>
      </main>
    </>
  );

};
// Export Profile
export default Profile;
