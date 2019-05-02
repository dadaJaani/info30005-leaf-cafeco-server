import React, { Component } from 'react';
import '../styles/restaurantdash.css';

import logo from "../images/cafecopartnerslogo.svg";

class restaurantdash extends Component {
  render() {
    return (
        <div className = "container">
            <div className = "sidebar-container">
                <div className = "restaurantInfo">
                    <img src={logo} alt = "cafe profile image">
                    </img>
                    <h1 className = "cafe-title">
                        cafe title
                    </h1>

                    <p id = "location">
                        cafe location
                    </p>
                </div>
                    <div className = "menu" >
                        <div className = "menu-item" id = "account"> My account </div>

                        <div className = "menu-item" id = "account"> Reviews and Ratings </div>

                        <div className = "menu-item" id = "logout"> log out </div>
                    </div>
            </div>


            <div className = "main-container">
                <div className = "restaurant-profile-container">
                    <h2 className = "detail-title" id = "profile-title">
                        Profile
                    </h2>
                    <p className = "detail-title" id = "name">
                        Buisness name:
                    </p>

                    <p className = "detail-title">
                        Restaurant details:
                    </p>

                    <p className = "detail-title">
                        Rewards offered:
                    </p>
                </div>

                <div className = "stats-container">
                    <h2 className = "detail-title" id = "stats-title">
                        Statistics
                    </h2>

                    <p className = "stats-details" id = "featured">
                        on featured cafes of the week
                    </p>

                    <p className = "stats-details" id = "credits">
                        credits have been redeemed at your cafe!
                    </p>

                </div>
            </div>
        </div>
    );
  }
}

export default restaurantdash;
