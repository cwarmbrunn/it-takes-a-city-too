// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import LOGIN_USER from Mutations.js
// import { LOGIN_USER } from "../utils/mutations";

// Import UPDATE_POST from Mutations.js
import { UPDATE_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const EditPage = () => {

  const [formState, setFormState] = useState({
    name: "",
    address: "",
    tags: "",
  });

  const [updatePost, { error }] = useMutation(UPDATE_POST);

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
     const { data } = await updatePost({ variables: {...formState }});
     Auth.login(data.addPost.token);
   } catch (e) {
     console.log(e);
   }
 };

 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Edit a Post</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
                {/* Form Input - Enter Location Name */}
                <input className="form-input" placeholder="Enter Location Name"></input>
                {/* Form Input - Enter Location Address */}
                <input className="form-input" placeholder="Enter Address"></input>
                {/* Form Input - Emter Tags */}
                <input className="form-input" placeholder="Enter Tags"></input>
                {/* Submit new Post button */}
                <button className="btn d-block w-100" type="submit" style= {{ background: "orange" }}>
                Submit
                </button>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}

// export EditPage
export default EditPage;
