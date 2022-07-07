// Import React
import React, { ueState } from "React";

// Import Mutation
import { useMutation } from "@apollo/client";

// Import ADD_USER
import { ADD_USER } from "../utils/mutations";

// Import Auth
import Auth from "../utils/auth";

// Set up Signup form
const Signup = () => {
  // Set up formState to add a user
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  // Use the mutation to add a user
  const [addUser, { error }] = useMutation(ADD_USER);
};

export default Signup;
