import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
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
                <Link to={`/thought/${post._id}`}>
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