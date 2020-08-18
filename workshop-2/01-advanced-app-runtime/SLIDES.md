# Advanced Examples

## Loading and Error States

```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    if (loading) {
        return 'Loading...'
    }
    if (error) {
        return 'Error!'
    }

    return 'Hello ' + data.me.name
}
```

On first load
```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    if (loading) {
        return 'Loading...'
    }
    /* if (error) {
        return 'Error!'
    }

    return 'Hello ' + data.me.name */
}
```

If an error occurs:

```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    /* if (loading) {
        return 'Loading...'
    } */
    if (error) {
        return 'Error!'
    }

    /* return 'Hello ' + data.me.name */
}
```

If the request succeeds and the data is ready
```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    /*if (loading) {
        return 'Loading...'
    }
    if (error) {
        return 'Error!'
    }*/

    return 'Hello ' + data.me.name
}
```

```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    return <Button error={error}>
        {loading && '...'}
        {data && 'Hello ' + data.me.name}
    </Button>
}
```

## Refetching

```jsx
const MyComponent = () => {
    const { loading, error, data, refetch } = useDataQuery(meQuery)

    return <div>
        <h3>
            {error && 'Error: ' + error}
            {loading && '...'}
            {data && 'Hello ' + data.me.name}
        </h3>
        <Button disabled={loading} onClick={refetch}>
            Reload
        </Button>
    </div>
}
```

## Dynamic Queries & Mutations

Any of the following query properties can by **dynamic**, meaning that they will changed based on the variables passed when the query is executed:
- id
- params
- data

A dynamic property should be defined as a **function which takes a variables object as its only parameter**, rather than as a static, primitive value.

Variable values can be passed to the query either:
1. Under the **variables** key of the Options object in **useDataQuery**
2. As the first argument to a **refetch** call

Static Query Examples

```js
const myQuery = {
  indicator: {
      resource: 'indicators',
      id: 42
  },
  filteredVisualizations: {
      resource: 'visualizations',
      params: {
          filter: 'name:\\$ilike:ANC'
      }
  }
}
```

Dynamic Queries

```js
const myQuery = {
  indicator: {
      resource: 'indicators',
      id: ({ id }) => id
  },
  filteredVisualizations: {
      resource: 'visualizations',
      params: ({ searchTerm }) => ({
          filter: 'name:\\$ilike:' + searchTerm
      })
  }
}
```

```js
//... in a React functional component ...\\
const { data, error, loading, refetch } = useDataQuery(myQuery, {
    variables: {
        id: 42,
        searchTerm: 'ANC'
    }
})

//... or later, with a refetch call ...\\
refetch({
    id: 42,
    searchTerm: 'ANC'
})
```

## Lazy Queries

Mutations are **lazy by default**

Queries are **optionally lazy**

A lazy query **will not start loading until refetch is called**

```js
const MyComponent = () => {
    const { loading, error, data, called, refetch } = 
        useDataQuery(meQuery, {
            lazy: true
        })

    return <div>
        <h3>
            {!called && 'Click the Load button!'}
            {loading && '...'}
            {error && 'Error: ' + error}
            {data && 'Hello ' + data.me.name}
        </h3>
        <Button disabled={loading} onClick={refetch}>
            {called ? 'Refresh' : 'Load'}
        </Button>
    </div>
}
```

## Async Callbacks

```js
const MyComponent = () => {
    const { loading } = useDataQuery(meQuery, {
        onError: error => showAlert('An error occured: ' + error),
        onComplete: data => showAlert('Hello ' + data.me.name)
    })

    if (loading) return '...'

    return 'Done!'
}
```