## Workshop 1 - App Runtime Task 2

### Fill in queries and mutations

This application uses queries and mutations in 3 React components:
- [PaginatedVisualizationsTable](./src/components/PaginatedVisualizationsTable.js)
- [DeleteVisualizationButton](./src/components/DeleteVisualizationButton.js)
- [NewVisualizationButton](./src/components/NewVisualizationButton.js)

The application is almost complete, all you need to do is fill in the queries and mutations in those three files.  You can use the [Data Query Playground](https://runtime.dhis2.nu/playground) to test different queries and mutations.

### Implement the pagination controls

The pagination buttons might look nice, but they don't do much yet.

Complete the implementation of each callback function in [PaginationControls](./src/components/PaginationControls.js) so that they update the page of the query in [PaginatedVisualizationsTable](./src/components/PaginatedVisualizationsTable.js).  The implementation of `onFirst` has been completed for you.

To submit, select **Exercise 4** from the Course tab on [the OpenEDX portal](https://academy.dhis2.org/courses/course-v1:HISP_UiO+D2ADd100EN+2020_Q3)

### Add support for renaming visualizations

This application supports **creating** and **deleting** visualizations, but it doesn't support **renaming** them.  This is your task:

Add an `Rename` button to each row in `VisualizationsTable.js`.  This Edit button should open a `Dialog` component (from `@dhis2/ui`) which contains a form.  That form should allow the user to type a new name for the selected Visualization.  When submitted, the form should use a Data Mutation to send a POST request updating the visualization's name.  The dialog should then disappear and the table of visualizations should refresh to show the updated name.

Good luck!
