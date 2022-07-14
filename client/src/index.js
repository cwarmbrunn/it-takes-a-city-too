import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  QUERY_ALL_POSTS,
  QUERY_ALL_USERS,
  QUERY_ONE_USER,
  QUERY_RESOURCES,
  QUERY_TAGS,
  QUERY_ALL_LOCATIONS,
} from "./utils/queries";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
