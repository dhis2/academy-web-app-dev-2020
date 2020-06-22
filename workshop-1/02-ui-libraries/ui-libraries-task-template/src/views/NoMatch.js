import { Redirect } from 'react-router-dom'
import React from 'react'

/**
 * When this component is rendered,
 * then the app redirects to the home page
 */
export const NoMatch = () => <Redirect to="/" />
