import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom"

import restaurantdash from "./screens/restaurantdash"
import restaurantlogin from "./screens/restaurantlogin"

import "./styles/restaurantdash.css"
import "./styles/restaurantlogin.css"

class App extends Component {
    render() {
        return (
            <Router>
                <Route path = "/" exact component = {restaurantdash}>
                </Route>

                <Route path = "/login" exact component = {restaurantlogin}>

                </Route>
            </Router>

        )
    }

}

export default App;
