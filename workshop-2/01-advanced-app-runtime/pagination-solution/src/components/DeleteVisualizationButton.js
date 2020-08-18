import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    resource: 'visualizations',
    type: 'delete',
    id: ({ id }) => id
}

export const DeleteVisualizationButton = ({ id, refetch }) => {
    const [mutate, { loading }] = useDataMutation(mutation)
    const onClick = () => {
        mutate({ id }).then(refetch)
    }
    return <Button destructive disabled={loading} onClick={onClick}>Delete</Button>
}