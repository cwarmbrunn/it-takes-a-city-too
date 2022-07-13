// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import LOGIN_USER from Mutations.js
// import { LOGIN_USER } from "../utils/mutations";

// Import ADD_POST from Mutations.js
import { ADD_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const PostPage = () => {

  const [formState, setFormState] = useState({
    name: "",
    address: "",
    tags: "",
  });

  const [addPost, { error }] = useMutation(ADD_POST);

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
     const { data } = await addPost({ variables: {...formState }});
     Auth.login(data.addPost.token);
   } catch (e) {
     console.log(e);
   }
 };

 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Add a Resource</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
                {/* Form Input - Enter Location Name */}
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
                {/* Submit new Post button */}
                <button className="btn d-block w-100" type="submit" style= {{ background: "orange" }}>
                Add Post
                </button>
             </form>
             {error && <div>Could not add post!</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

// export PostPage
export default PostPage;
