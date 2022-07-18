import React from "react";

import { MDBDataTable } from "mdbreact";
import { Link, useParams } from "react-router-dom";

// import { data } from 'jquery';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";

import Auth from "../utils/auth";

const DatatablePage = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);

  if (loading) {
    return <div>Loading...hang tight!</div>;
  }

  const getPosts = () => {
    if (loading) return null;
    if (error) return `Error! ${error}`;
    const tableData = [];
    for (var i = 0; i < data.allposts.length; i++) {
      var tag = "";
      var name = data.allposts[i].locationName;
      var location = data.allposts[i].address;
      var postText = data.allposts[i].postText;
      console.log("hi");
      console.log(data.allposts[i].postText);
      var username = data.allposts[i].username;
      for (var x = 0; x < data.allposts[i].tags.length; x++) {
        if (x !== data.allposts[i].tags.length - 1) {
          tag += data.allposts[i].tags[x] + ", ";
        } else {
          tag += data.allposts[i].tags[x];
        }
      }
      var id = (
        <Link to={`/post/${data.allposts[i]._id}`} style={{ fontWeight: 700 }} className="text-dark" >View</Link>
        );

      tableData[i] = { id, name, location, postText, tag, username };
    }
    return tableData;
  };
  const tabledata = {
    columns: [
      {
        label: "Post",
        field: "id",
        sort: "asc",
        width: 200,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 270,
      },
      {
        label: "Post Text",
        field: "postText",
        sort: "asc",
        width: 400,
      },
      {
        label: "Tags",
        field: "tag",
        sort: "asc",
        width: 200,
      },
      {
        label: "User",
        field: "username",
        sort: "asc",
        width: 200,
      },
    ],
    rows: getPosts(),
  };

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
          <h1 className="text-decoration-underline">Post</h1>
          <MDBDataTable striped bordered small data={tabledata} />
        </div>
        <div className="py-5 posts">{/* Posts to go here? */}</div>
      </div>
    </main>
  );
};

export default DatatablePage;
