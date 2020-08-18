import React from 'react'
import { Button } from "@dhis2/ui";

import * as classes from '../App.module.css'

export const PaginationControls = ({ pager, refetch }) => {
  const { page, pageCount } = pager;

  const onPrevious = () => {
    refetch({ page: page - 1 })
  }
  const onNext = () => {
    refetch({ page: page + 1 })
  }
  const onFirst = () => {
    refetch({ page: 1 })
  }
  const onLast = () => {
    refetch({ page: pageCount })
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
