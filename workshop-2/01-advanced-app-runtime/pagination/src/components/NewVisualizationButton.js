import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    resource: 'visualizations',
    /* @TODO: add a mutation for creating a NEW visualization */
    /* Use this data payload:
        {
            name: 'AAA_TEST',
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