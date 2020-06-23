import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import React from 'react'

/**
 * This defined the data that we want to get
 * The `app-runtime` will be explained in a presentation after this one,
 * so you don't have to worry about the specifics
 */
const ATTRIBUTES_QUERY = {
    // One query object in the whole query
    attributes: {
        // The `attributes` endpoint should be used
        resource: 'attributes',
        params: {
            // Paging is disabled
            paging: false,
            // Only the attribute properties that are required should be loaded
            fields: 'id,displayName,unique',
        },
    },
}

export const Attributes = () => {
    // This is yet another functionality provided by the `@dhis2/app-runtime`
    // For the time being it does not matter what this does exactly
    // * loading will be true while the data is being loaded
    // * error will be an instance of `Error` if something fails
    // * data will be null while the data is being loaded or if something fails
    // * data will be an object once loading is done with the following path
    //   data.attributes.attributes <- That's an array of objects
    const { loading, error, data } = useDataQuery(ATTRIBUTES_QUERY)

    return (
        <div>
            <h1>Attributes</h1>

            {// display that the data is being loaded
            // when loading is true
            loading && 'Loading...'}

            {// display the error message
            // is an error occurred
            error && error.message}

            {// if there is any data available
            data?.attributes?.attributes && (
                <Table>
                    <TableHead>
                        <TableRowHead>
                            <TableCellHead>Name</TableCellHead>
                            <TableCellHead>Unique</TableCellHead>
                        </TableRowHead>
                    </TableHead>
                    <TableBody>
                        {data.attributes.attributes.map(
                            ({ id, displayName, unique }) => (
                                <TableRow key={id}>
                                    <TableCell>{displayName}</TableCell>

                                    <TableCell>
                                        {unique ? 'Yes' : 'No'}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}
