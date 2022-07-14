import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QUERY_ALL_POSTS } from "./utils/queries.js";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  QUERY_ALL_USERS,
  QUERY_ONE_USER,
  QUERY_RESOURCES,
  QUERY_TAGS,
  QUERY_ALL_LOCATIONS,
} from "./utils/queries";

// const $ = require("jquery");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// window.onload = function () {
//   $(document).ready(function () {
//     $("#myInput").on("keyup", function () {
//       var value = $(this).val().toLowerCase();
//       $("#myTable tr").filter(function () {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//       });
//     });
//   });
// };
// function getPosts() {
//   console.log("start");
//   var table = document.getElementsByClassID("myTable");
//   console.log(table);
//   table.innerHTML += "<tr> <td>Item</td> </tr>";
//   console.log("finished");
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// getPosts();
reportWebVitals();
