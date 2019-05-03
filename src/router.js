import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login';

export default(
    <Switch>
        <Route path = '/' exact component = {Login}/>
    </Switch>
)