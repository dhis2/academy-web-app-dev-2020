import React from 'react'
import { Button } from "@dhis2/ui";

import * as classes from '../App.module.css'

export const PaginationControls = ({ pager, refetch }) => {
  const { page, pageCount } = pager;

  /* @TODO: Call refetch() in each of the following functions,
   *        passing the correct variables to update 
   *        the query in PaginatedVisualizationsTable.js
   *        NOTE: onFirst has been completed as an example
   */
  const onPrevious = () => {
    // @TODO
  }
  const onNext = () => {
    // @TODO
  }
  const onFirst = () => {
    refetch({ page: 1 })
  }
  const onLast = () => {
    // @TODO
  }

  return (
    <div className={classes.buttons}>
      <Button onClick={onFirst} disabled={page === 1}>
        First
      </Button>
      <Button onClick={onPrevious} disabled={page === 1}>
        Previous
      </Button>
      <span>
        Page {page} of {pageCount}
      </span>
      <Button onClick={onNext} disabled={page === pageCount}>
        Next
      </Button>
      <Button
        onClick={onLast}
        disabled={page === pageCount}
      >
        Last
      </Button>
    </div>
  );
};
