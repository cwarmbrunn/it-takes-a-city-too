import React from 'react';

import { MDBDataTable } from 'mdbreact';

import { data } from 'jquery';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS } from "../utils/queries";

import Auth from "../utils/auth";


var i;
var tableData
function getPosts({}) {
  const { loading, error, data } = useQuery(QUERY_ALL_POSTS);
  if (loading) return null;
  if (error) return `Error! ${error}`;

  for (i = 0; i < data.length; i++) {
    var name = data[i].locationName;
    var location = data[i].address;
    var tag = ""
    var id = data[i]._id
    tableData = [
      name,
      location,
      tag,
      id
    ]
  }
  return tableData;
}
getPosts();
const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Location',
        field: 'location',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Tags',
        field: 'tags',
        sort: 'asc',
        width: 200
      },
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 200
      }
    ],
    rows: tableData
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;
