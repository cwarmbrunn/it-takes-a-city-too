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

    try {
      const { data } = await addUser({ variables: { ...formState } });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              {/* Form Input - Username */}
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
