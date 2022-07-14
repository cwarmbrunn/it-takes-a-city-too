// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import UPDATE_POST from Mutations.js
import { UPDATE_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const EditPage = () => {

  const [formState, setFormState] = useState({
    _id: "",
    postText: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
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

  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }

  // Submit Post
 const handlePostItem = async (event) => {
   event.preventDefault();

   try {
    fixedState = removeEmpty(formState);
     const { data } = await updatePost({ variables: {...fixedState }});
     window.location.assign("/edit-post");
    } catch (e) {
     console.log(e);
   }
 };

 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Edit Post</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
            {/* Form Input - Enter post ID */}
            <input
              className="form-input"
              placeholder="Enter Post ID"
              name="_id"
              type="text"
              id="_id"
              value={formState.name}
              onChange={handleChange}
              required
            />
            {/* Form Input - Enter Location Name */}
            <input
              className="form-input"
              placeholder="Enter Location Name"
              name="locationName"
              type="text"
              id="locationName"
              value={formState.locationName}
              onChange={handleChange}
            />
            {/* Form Input - Enter Username for Post */}
            <input
              className="form-input"
              placeholder="Enter Location Description"
              name="postText"
              type="text"
              id="postBody"
              value={formState.postText}
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
            {/* Form Input - City */}
            <input
              className="form-input"
              placeholder="Enter City"
              name="city"
              type="text"
              id="city"
              value={formState.city}
              onChange={handleChange}
            ></input>
            {/* Form Input - State */}
            <input
              className="form-input"
              placeholder="Enter State"
              name="state"
              type="text"
              id="state"
              value={formState.state}
              onChange={handleChange}
            ></input>
            {/* Form Input - Add Zip Code */}
            <input
              className="form-input"
              placeholder="Enter Zip Code"
              name="zipCode"
              type="number"
              id="zipCode"
              value={formState.zipCode}
              onChange={handleChange}
            ></input>
            {/* Form Input - Enter Tags */}
            {/* Had to hardcode these  */}
            <select
              name="tags"
              className="form-input"
              id="tags"
              required
              value={formState.tags}
              onChange={handleChange}
            >
              <option disabled selected value>
                -- Select an Option --
              </option>
              <option value="Shelter">Shelter</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Employment">Employment</option>
              <option value="Legal">Legal</option>
            </select>
                {/* Submit newly edited Post button */}
                <button className="btn d-block w-100" type="submit" style= {{ background: "orange" }}>
                Submit
                </button>
             </form>
             {error && <div className="text-danger">Could not edit post!</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

// export EditPage
export default EditPage;
