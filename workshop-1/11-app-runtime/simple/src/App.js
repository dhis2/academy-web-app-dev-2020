import React from 'react'
import { IndicatorsList } from './IndicatorsList'

import * as classes from './App.module.css'

const MyApp = () => (
    <div className={classes.container}>
        <h1>Indicators</h1>
        <IndicatorsList />
    </div>
)

export default MyApp
