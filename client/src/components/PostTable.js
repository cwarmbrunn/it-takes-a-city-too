import React from "react";

import { MDBDataTable } from "mdbreact";

// import { data } from 'jquery';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";

import Auth from "../utils/auth";

const DatatablePage = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);

  const getPosts = () => {
    if (loading) return null;
    if (error) return `Error! ${error}`;
    const tableData = []
    for (var i = 0; i < data.allposts.length; i++) {
      var tag =""
      var name = data.allposts[i].locationName;
      var location = data.allposts[i].address;
      for(var x = 0;x < data.allposts[i].tags.length;x++){
        console.log(x)
        if (x !== data.allposts[i].tags.length-1){
          
      tag += data.allposts[i].tags[x] + "," ;
        }
        else{
          tag += data.allposts[i].tags[x];
        }
      }
      var id = data.allposts[i]._id;
      var username = data.allposts[i].username;
      tableData[i] = {name, location, tag, id,username};
    }
    return tableData;
  };
  const tabledata = {
    columns: [
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
        label: "Tags",
        field: "tag",
        sort: "asc",
        width: 200,
      },
      {
        label: "ID",
        field: "id",
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
      <MDBDataTable
      striped
      bordered
      small
      data={tabledata}
    />
    </div>
  </div>
</main>
  
  )
};

export default DatatablePage;
