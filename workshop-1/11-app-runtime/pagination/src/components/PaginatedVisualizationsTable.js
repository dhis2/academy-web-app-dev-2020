import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import {
  CircularLoader
} from "@dhis2/ui";

import { VisualizationsTable } from './VisualizationsTable'
import { PaginationControls } from './PaginationControls'

import * as classes from "../App.module.css";

const visualizationsQuery = {
  // NOTE: you could use any name here, which is handy if you have multiple parallel queries
  results: {
    /* @TODO: add a query which returns the specified page of visualizations */
    /* The variables passed to the query will have the shape
     *  {
     *    page: 1
     *  }
     *  
     *  Use a pageSize of 5, and request the following fields:
     *  - id
     *  - name
     */
  },
};

export const PaginatedVisualizationsTable = () => {
  const { loading, error, data, refetch } = useDataQuery(visualizationsQuery, {
    variables: { page: 1 },
  });

  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return <CircularLoader />;
  }

  return (
    <div className={classes.tableContainer}>
      <VisualizationsTable visualizations={data.results.visualizations} refetch={refetch} />
      <PaginationControls pager={data.results.pager} refetch={refetch} />
    </div>
  );
};
