// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import ADD_POST from Mutations.js
import { ADD_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";
// Import useQuery
import { useQuery } from "@apollo/client";

// Import Query CURRENT USER
import { QUERY_CURRENT_USER } from "../utils/queries";

const PostPage = () => {
  const { loading, data } = useQuery(QUERY_CURRENT_USER);
  // Set up userData
  const userData = data?.me || {};
  const [formState, setFormState] = useState({
    postText: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    tags: "",
  });

  formState.username = userData.username;

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
    console.log(formState);
    try {
      const { data } = await addPost({ variables: { ...formState } });
      Auth.login(data.addPost.token);
    } catch (event) {
      console.log(event);
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
                name="locationName"
                type="text"
                id="locationName"
                value={formState.locationName}
                onChange={handleChange}
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
              {/* Submit new Post button */}
              <button
                className="btn d-block w-100"
                type="submit"
                style={{ background: "orange" }}
              >
                Add Post
              </button>
            </form>
            {error && <div className="text-danger">Could not add post!</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

// export PostPage
export default PostPage;
