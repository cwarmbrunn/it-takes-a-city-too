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

  // Update the state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
        const {data} = await addUser({variables: {...formState},});
Auth.login(data.addUser.token)} catch(e){
    console.log(e)
}
  };
};

export default Signup;
