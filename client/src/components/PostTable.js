import React from "react";

import { MDBDataTableV5 } from "mdbreact";

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
  const [datatable, setDatatable] = React.useState({
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
  });

  return (
  <main>
  <div className="flex-row justify-space-between">
    <div className="bg-white p-4 rounded overflow-hidden shadow-lg">
      <h1 className="text-decoration-underline">Posts</h1>
      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
    </div>
  </div>
</main>
  )
};

export default DatatablePage;