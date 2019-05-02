import React, { Component } from 'react';
import '../styles/restaurantlogin.css';

import loginlogo from "../images/cafecologo.png";
import browserImage from "../images/undraw_browser_stats_704t.svg";
import searchImage from "../images/undraw_file_searching_duff.svg";

class restaurantlogin extends Component {
    render() {
        return (
            <div className = "login-container">
                <div className = "left-container">
                    <img className = "left-image" src = {browserImage} alt = "stylised image of a browser"/>
                </div>

                <div className = "middle-container">
                    <img className = "login-logo" src = {loginlogo} alt = "cafeco logo" />


                    <h2 className = "login-title">
                        Login
                    </h2>

                    <div className = "input">

                        <p className = "username">
                            Username:
                        </p>

                        <p className = "password">
                            Password:
                        </p>

                        <input className = "input-form"/>

                        <input className = "input-form"/>

                    </div>

                    <button className = "restaurant-login-button">
                        Log in
                    </button>

                    <div className = "footnote">
                        <p>
                            Not a partnered business?
                        </p>

                        <p>
                            Return to hompage.
                        </p>

                    </div>

                </div>

                <div className = "right-container">
                    <img className = "right-image" src = {searchImage} alt = "stylised image of a magnifying glass looking at documents" />

                </div>

            </div>
        );
    }
}

export default restaurantlogin;
