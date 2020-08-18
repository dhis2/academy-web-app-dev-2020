import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui'
import * as classes from './App.module.css'

// @TODO: Update this query to show 5 indicators with their name and description
const query = {
    results: {
        resource: 'indicators',
        params: {
            pageSize: 3,
            fields: ['name']
        }
    },
}

export const IndicatorsList = () => {
    const { loading, error, data } = useDataQuery(query)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <CircularLoader />
    }

    return <ul className={classes.list}>
        {data.results.indicators.map(indicator =>
            <li>
                <strong>{indicator.name}</strong><br/>
                {/* @TODO: Uncomment the following line */}
                {/* <span>{indicator.description}</span> */}
            </li>
        )}
    </ul>
}