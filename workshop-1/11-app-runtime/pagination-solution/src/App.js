import React from 'react'
import { PaginatedVisualizationsTable } from './components/PaginatedVisualizationsTable'

import * as classes from './App.module.css'

const MyApp = () => (
    <div className={classes.container}>
        <h1>All Visualizations</h1>
        <PaginatedVisualizationsTable />
    </div>
)

export default MyApp
