# Advanced Application Runtime and Data Queries

Some handy links:
- [Presentation Slides](https://docs.google.com/presentation/d/e/2PACX-1vSzU1CdwH9CBwWnWA8jM4bwqveKe-rqflc33IFoNpnI-ZYhw9F_pMY_LUD4C2IWuWZFMiqvscuVos-u/pub?start=false&loop=false&delayms=3000)
- [Code Examples from Slides](./SLIDES.md)
- [REST API Documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [App Runtime Docs](https://runtime.dhis2.nu)
- [Data Query Playground](https://runtime.dhis2.nu/playground)
- [App Runtime Example App](https://github.com/dhis2/app-runtime/tree/master/examples/cra)

## Exercise 1 - Use an Advanced Data Query

1. Pick one of the advanced data query functionality presented today
2. Implement a component using this functionality in [the `simple` CodeSandbox](https://codesandbox.io/s/github/dhis2/academy-web-app-dev-2020/tree/master/workshop-2/01-advanced-app-runtime/simple?file=src/AdvancedQueryComponent.js).  You may use any query resource (or mutation)

## Exercise 2 - Pagination and Mutations
Open [the `pagination` CodeSandbox](https://codesandbox.io/s/github/dhis2/academy-web-app-dev-2020/tree/master/workshop-2/01-advanced-app-runtime/pagination?file=README.md) and follow the instructions in [the README](./pagination/README.md)

> **NOTE** : Don't forget to fork the sandbox!

A [solution CodeSandbox](https://codesandbox.io/s/github/dhis2/academy-web-app-dev-2020/tree/master/workshop-1/01-advanced-app-runtime/pagination-solution) is also available, though it does not include the Rename buttons

This is the same task as Exercise 2 of the App Runtime session in Workshop 1.  If you completed the Bonus problem for that exercise, you may re-use your existing solution (we can look it up for you if you don't remember the CodeSandbox URL)

## Exercise 3 - (bonus) Sequential queries & mutations

Update the result of the previous exercise, but with a twist - when creating a new visualization, automatically **prepend the user's name to the visualization before saving**.  This requires you to perform a **query to the `me` endpoint followed by the mutation to the `visualizations` endpoint.**  You may use the imperative Data Engine interface for this.

If you want even more of a challenge, **update the app so that the user CAN ONLY RENAME OR DELETE VISUALIZATIONS WHICH START WITH THEIR NAME, and cannot edit the username portion of the visualization name.**
