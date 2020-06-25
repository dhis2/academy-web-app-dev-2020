import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    resource: 'visualizations',
    /* @TODO: create a mutation for creating a NEW visualization */
    /* Use this data payload:
        {
            name: '__TEST__',
            type: 'SINGLE_VALUE'
        }
    */
}

export const NewVisualizationButton = ({ refetch }) => {
    const [mutate, { loading }] = useDataMutation(mutation)
    const onClick = async () => {
        await mutate()
        refetch()
    }
    return <Button primary disabled={loading} onClick={onClick}>+ New</Button>
}