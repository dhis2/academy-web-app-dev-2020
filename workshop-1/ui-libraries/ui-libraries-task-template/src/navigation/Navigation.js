// @TODO: Import the `Menu` and `MenuItem` components

import { useHistory, useRouteMatch } from 'react-router-dom'
import { PropTypes } from '@dhis2/prop-types'
import React from 'react'

const NavigationItem = ({ path, label }) => {
    // browser history object
    const history = useHistory()

    // "null" when not active, "object" when active
    const routeMatch = useRouteMatch(path)
    // If "isActive" is not null and "isActive.isExact" is true
    const isActive = routeMatch?.isExact

    // Callback called when clicking on the menu item.
    // If the menu item is not active, navigate to the path
    const onClick = () => !isActive && history.push(path)

    // @TODO: Use the `MenuItem` component insteaf of the `div`
    return <span label={label} active={isActive} onClick={onClick} />
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

// @TODO: Use the `Menu` component instead of the `div`
export const Navigation = () => (
    <div>
        <NavigationItem
            // Menu item for the home page
            label="Home"
            path="/"
        />

        <NavigationItem
            // Menu item for the meta data page
            label="Attributes"
            path="/attributes"
        />

        <NavigationItem
            // Menu item for the FAQ page
            label="Form"
            path="/form"
        />
    </div>
)
