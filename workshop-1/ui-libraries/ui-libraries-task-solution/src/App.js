import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import { Form, Home, Attributes, NoMatch } from './views'
import { Navigation } from './navigation'
import styles from './App.module.css'

const MyApp = () => (
    <BrowserRouter
    // This Router will use the browser history.
    // If older browsers need to be supported,
    // then the `HashRouter` can be used
    // For more information, check out the docs:
    // https://reacttraining.com/react-router/web/guides/quick-start
    >
        <div className={styles.container}>
            <div className={styles.left}>
                <Navigation
                // This component has to be inside the `BrowserRouter`
                // because it will use the router's information
                // (It will access the react context through hooks)
                />
            </div>

            <div className={styles.right}>
                <Switch
                // will ensure that only the first route,
                // that matches the url, will be rendered
                // otherwise the 404 page would be rendered everytime
                >
                    <Route
                        // Home route, will render "Home" component
                        // when "/" is the current url
                        exact
                        path="/"
                        component={Home}
                    />

                    <Route
                        // FAQ route, will render "Form" component
                        // when "/faq" is the current url
                        exact
                        path="/form"
                        component={Form}
                    />

                    <Route
                        // Attributes route, will render "Attributes" component
                        // when "/attributes" is the current url
                        exact
                        path="/attributes"
                        component={Attributes}
                    />

                    <Route
                        // 404 page
                        // The `NoMatch` component will redirect to "/"
                        component={NoMatch}
                    />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)

export default MyApp
