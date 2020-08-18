import React from 'react'

const App = () => {
    const today = new Date()
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>
                In case you want to know, {today.getHours()}:
                {today.getMinutes()} is the current time
            </h2>
        </div>
    );
};

export default App
