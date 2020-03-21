import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import History from '../route/History';
import Search from '../pages/SearchResult';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/Search" component={Search} />
                </Switch>
            </Router>
        )
    }
}