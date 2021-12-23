import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';


function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </>
    );
}

export default App;
