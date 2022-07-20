// Import React
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Import useMutation
import { useQuery, useMutation } from "@apollo/client";

// Import UPDATE_POST from Mutations.js
import { QUERY_ONE_POST } from "../utils/queries";
import { UPDATE_POST } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const EditPage = () => {
  const { id: postParam } = useParams();
  const loggedIn = Auth.loggedIn();
  const { loading, err, data } = useQuery(QUERY_ONE_POST, { variables: { id: postParam } });
  const postData = data?.post;
  console.log(postData);

  const [formState, setFormState] = useState({
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
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => (v != null || v != "" || v != undefined)));
  }

  // Submit Post
 const handlePostItem = async (event) => {
   event.preventDefault();

   try {
    const fixedState = removeEmpty(formState);
     const { data } = await updatePost({ variables: {...fixedState }});
     window.location.assign("/profile");
    } catch (e) {
     console.log(e);
   }
 };


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

    if (postData) {
      console.log(postData);
      // setFormState({
      //   postText: postData.postText,
      //   locationName: postData.locationName,
      //   address: postData.address,
      //   city: postData.city,
      //   state: postData.state,
      //   zipCode: postData.zipCode,
      //   tags: postData.tags[0],
      // });
    }

 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Edit Post</h4>
          <div className="card-body">
            <form onSubmit={handlePostItem}>
            {/* Form Input - Enter Location Name */}
            <input
              className="form-input"
              placeholder="Enter Location Name"
              name="locationName"
              type="text"
              id="locationName"
              value={postData.locationName}
              onChange={handleChange}
            />
            {/* Form Input - Enter Username for Post */}
            <input
              className="form-input"
              placeholder="Enter Location Description"
              name="postText"
              type="text"
              id="postBody"
              value={postData.postText}
              onChange={handleChange}
            />
            {/* Form Input - Enter Location Address */}
            <input
              className="form-input"
              placeholder="Enter Address"
              name="address"
              type="text"
              id="locationAddress"
              value={postData.address}
              onChange={handleChange}
            />
            {/* Form Input - City */}
            <input
              className="form-input"
              placeholder="Enter City"
              name="city"
              type="text"
              id="city"
              value={postData.city}
              onChange={handleChange}
            ></input>
            {/* Form Input - State */}
            <input
              className="form-input"
              placeholder="Enter State"
              name="state"
              type="text"
              id="state"
              value={postData.state}
              onChange={handleChange}
            ></input>
            {/* Form Input - Add Zip Code */}
            <input
              className="form-input"
              placeholder="Enter Zip Code"
              name="zipCode"
              type="number"
              id="zipCode"
              value={postData.zipCode}
              onChange={handleChange}
            ></input>
            {/* Form Input - Enter Tags */}
            {/* Had to hardcode these  */}
            <select
              name="tags"
              className="form-input"
              id="tags"
              required
              value={postData.tags[0]}
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
