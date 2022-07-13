// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import LOGIN_USER from Mutations.js
// import { LOGIN_USER } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const PostPage = () => {
 function handlePostItem(){
    //Madison:hit api route to post by grabbing info from form
 }
 return (
    //Madison: style this page
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Add a Resource</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
                <input className="form-input" placeholder="Enter Location Name"></input>
                <input className="form-input" placeholder="Enter Address"></input>
                <input className="form-input" placeholder="Enter Tags"></input>
                {/* Submit new Post button */}
                <button className="btn d-block w-100" type="submit" style= {{ background: "orange" }}>
                Add Post
                </button>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// export PostPage
export default PostPage;
