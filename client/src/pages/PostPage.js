// Import React
import React, { useState } from "react";

// Import useMutation
import { useMutation } from "@apollo/client";

// Import LOGIN_USER from Mutations.js
// import { LOGIN_USER } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

const postPage = () => {
 function handlePostItem(){
    //hit api route to post by grabbing info from form
 }
 return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form>
                <h2>Name of Location</h2>
                <input></input>
                <h2>Location</h2>
                <input></input>
                <h2>Tags</h2>
                <input></input>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}