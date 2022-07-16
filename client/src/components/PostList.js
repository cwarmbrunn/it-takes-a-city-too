import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return (
          <div className="card mb-3">
          <p className="card-header">{title} has no posts.</p>
          <p className="text-xl card-body">
            You can't see what they haven't done! {" "}
          </p>
          </div>
    )
  }

return (
  <div>
    {posts &&
      posts.map(post => (
        <div key={post._id} className="card mb-3">
          <p className="card-header">
            <Link
              to={`/profile/${post.username}`}
              style={{ fontWeight: 700 }}
              className="text-dark"
            >
              {post.username}
            </Link>{' '}
            suggests {post.locationName} for the following:{post.tags.map((tag) =>
              ` ${tag}.`
            )}
          </p>
          <div className="card-body">
            <p className="mb-0">{post.address}</p>
            <p className="mb-0">{post.fullAddress}</p>
            <p className="mb-0">{post.postText}</p>
            <p className="mb-0">
              Comments: {post.commentCount} - {' '}
              <Link to={`/post/${post._id}`}>
                {post.commentCount ? 'See' : 'Start'} the discussion!
              </Link>
            </p>
          </div>
        </div>
      ))}
  </div>
);
};

export default PostList;