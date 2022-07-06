// Import React and React Bootstrap
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

// Import Mutations

// Import LOGIN_USER from Mutations.js

// Import Auth from Auth.js

// Set up LoginForm
const LoginForm = () => {
  const handleInputChange = (event) => {};
  const handleFormSubmit = async (event) => {};

  // Check if the form has everything accurately listed
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  try{
    const {data} = await loginUser({
        variables: {...userFormData}
    });

    console.log(data);
    Auth.login(data.login.token);
  } catch (err){}
};

// Return Form information here
return (<></>)