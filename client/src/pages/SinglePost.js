// Import React
import React from "react";

// Import Navigate and useParams
import { Link, useParams } from "react-router-dom";

// Import useQuery and useMutation
import { useQuery } from "@apollo/client";

// TODO: KAIJAM - Import queries we'll need!
import { QUERY_ONE_POST, QUERY_CURRENT_USER } from "../utils/queries";
// Import Auth
import Auth from "../utils/auth";
import PostList from '../components/PostList';

const SinglePost = () => {
  const { id: postParam } = useParams();
  const loggedIn = Auth.loggedIn();
  const { loading, error, data } = useQuery(QUERY_ONE_POST, { variables: { id: postParam } });
  const postData = data?.post;
  console.log(postData);

  if (loading) {
    return <div>Loading...hang tight!</div>;
  }

  // If the post doesn't exiat, display the following content
  if (!postData) {
    return (
      <main>
        <div className="flex-row justify-space-between">
          {loggedIn ? <div className="col-12 mb-3">Hello {Auth.getProfile().data.username} </div> : <div className="col-12 mb-3">Hello Guest </div>}
          <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
            <h1 className="text-decoration-underline">Post Not Found!</h1>
            <div className="card mb-3">
              <p className="card-header">That post does not exist.</p>
              <p className="text-xl card-body">
                Sorry, you're looking for something that ain't here! {" "}
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
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn ? <div className="col-12 mb-3">Hello {Auth.getProfile().data.username} </div> : <div className="col-12 mb-3">Hello Guest </div>}
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">{postData.locationName}!</h1>
          <p className="text-xl">
            <div>
              <div key={data._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${postData.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-dark"
                  >
                    {postData.username}
                  </Link>{' '}
                  suggests for the following services:{postData.tags.map((tag) =>
                    ` ${tag}.`
                  )}
                </p>
                <div className="card-body">
                  <p className="mb-0">{postData.address}</p>
                  <p className="mb-0">{postData.fullAddress}</p>
                  <p className="mb-0">{postData.postText}</p>
                </div>
              </div>
              {postData.comments &&
                postData.comments.map(comment => (
                  <div key={comment._id} className="card mb-3">
                    <p className="card-header">Comment by {' '}
                      <Link
                        to={`/profile/${comment.username}`}
                        style={{ fontWeight: 700 }}
                        className="text-dark"
                      >
                        {comment.username}
                      </Link>
                    </p>
                    <div className="card-body">
                      <p className="mb-0">{comment.commentBody}</p>
                    </div>
                  </div>
                ))}

            </div>
          </p>
        </div>
        <div className="py-5 posts">{/* Posts to go here? */}</div>
      </div>
    </main>
  );

};
// Export Profile
export default SinglePost;
