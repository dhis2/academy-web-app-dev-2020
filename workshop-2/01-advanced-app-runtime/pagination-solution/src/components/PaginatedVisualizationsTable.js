import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import {
  CircularLoader
} from "@dhis2/ui";

import { VisualizationsTable } from './VisualizationsTable'
import { PaginationControls } from './PaginationControls'

import * as classes from "../App.module.css";

const visualizationsQuery = {
  results: {
    resource: "visualizations",
    params: ({ page }) => ({
      page: page,
      pageSize: 5 ,
      fields: ["id", "name", "description"],
    }),
  },
};

export const PaginatedVisualizationsTable = () => {
  const { loading, error, data, refetch } = useDataQuery(visualizationsQuery, {
    variables: { page: 0 },
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
