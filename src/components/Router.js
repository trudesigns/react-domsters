import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
<BrowserRouter>
<Switch>
    <Route exact path="/" component={App} />
    {/* puts not found on verything after the / */}
    <Route component={NotFound} />
    </Switch>
</BrowserRouter>
);

export default Router;