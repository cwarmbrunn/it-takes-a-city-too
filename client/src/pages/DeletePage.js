// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import DELETE_POST from Mutations.js
import { DELETE_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const DeletePage = () => {

  const [formState, setFormState] = useState({
    name: "",
    address: "",
    tags: "",
  });

  const [deletePost, { error }] = useMutation(DELETE_POST);

  // update the state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit Post
 const handlePostItem = async (event) => {
   event.preventDefault();

   try {
     const { data } = await deletePost({ variables: {...formState }});
     Auth.login(data.addPost.token);
   } catch (e) {
     console.log(e);
   }
 };

 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Delete Post</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
                {/* Form Input - Enter Location Address */}
                <input
                className="form-input"
                placeholder="Enter Location Name"
                name="name"
                type="text"
                id="locationName"
                value={formState.name}
                onChange={handleChange}
                />
                {/* Form Input - Enter Location Address */}
                <input
                className="form-input"
                placeholder="Enter Address"
                name="address"
                type="text"
                id="locationAddress"
                value={formState.address}
                onChange={handleChange}
                />
                {/* Form Input - Enter Tags */}
                <input
                className="form-input"
                placeholder="Enter Tags"
                name="tags"
                type="text"
                id="tags"
                value={formState.tags}
                onChange={handleChange}
                />
                {/* Submit newly edited Post button */}
                <button className="btn d-block w-100" type="submit" style= {{ background: "orange" }}>
                Submit
                </button>
             </form>
             {error && <div className="text-danger">Could not delete post!</div>}
          </div>
        </div>
      </div>
    </main>
  );
}
