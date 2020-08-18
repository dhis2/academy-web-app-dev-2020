# Knowledge Quizzes

## Loading and Error States

Given the following component, which of the following is NOT a possible sequence of render results?  There may be more than one correct answer

```js
const MyComponent = () => {
    const { loading, error, data } = useDataQuery(meQuery)

    if (loading) return 'Loading'
    if (error) return 'Error'
    
    return 'Loaded'
}
```

1. Loading, Error
2. Error, Loaded
3. Loading, Loaded
4. Loading, Error, Loaded
5. Loading, Error, Loading, Loaded

## Dynamic Queries

Given the following component, which of the following is NOT a possible sequence of render results?  There may be more than one correct answer

```js
const identifierQuery = {
    identifier: {
        resource: 'identifiers',
        id: ({ identifierId }) => identifierId,
        params: {
            fields: ['id']
        }
    }
}
const MyComponent = ({ identifierId }) => {
    const { loading, error, data, called, refetch } = 
        useDataQuery(meQuery, {
            variables: {
                identifierId
            },
            lazy: true
        })
    
    return <div>
        {!called && 'Unknown'}
        {loading && 'Loading'}
        {error && 'Error'}
        {data && 'Loaded'}
        <Button 
            disabled={loading}
            onClick={() => refetch({ identifierId })}>
            Reload
        </Button>
    </div>
}
```

1. Loading, Error
2. Error, Loaded
3. Loading, Loaded
4. Unknown, Loading, Error, Loaded
5. Unknown, Loading, Loaded
6. Unknown, Loaded
7. Unknown, Loading, Error
8. Loading, Error, Loading, Loaded
9. Unknown, Loading, Error, Loading, Loaded
10. Unknown, Loading, Loaded, Loading, Loaded