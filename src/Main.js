import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Sales from "./Sales";
import BackToSchool from "./BackToSchool";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Welcome to Target!</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/categories">Categories</NavLink></li>
                    <li><NavLink to="/sales">Sales</NavLink></li>
                    <li><NavLink to="/backtoschool">Back to School</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/sales" component={Sales}/>
                    <Route path="/backtoschool" component={BackToSchool}/>

                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;