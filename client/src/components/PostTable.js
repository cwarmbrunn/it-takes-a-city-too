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

    for (var i = 0; i < data.length; i++) {
      var name = data[i].locationName;
      var location = data[i].address;
      var tag = "";
      var id = data[i]._id;
      var tableData = [name, location, tag, id];
    }
    return tableData;
  };

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
