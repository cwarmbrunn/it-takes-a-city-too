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
      var name = data.allposts[i].locationName;
      var location = data.allposts[i].address;
      var tag = "";
      var id = data.allposts[i]._id;
      tableData[i] = {name, location, tag, id};
    }
    console.log(tableData);
    return tableData;
  };
  console.log(getPosts());
  const newData = {
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
        field: "tags",
        sort: "asc",
        width: 200,
      },
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 200,
      },
    ],
    rows: getPosts(),
  };

  return <MDBDataTable striped bordered small data={newData} />;
};

export default DatatablePage;
