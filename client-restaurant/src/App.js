import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className = "container">
            <div className = "sidebar-container">
                <div className = "restaurantInfo">
                    <img src = "http://www.royalhotelchilliwack.com/Content/images/Hotel-Cafe-o.jpg" alt = "cafe profile image">
                    </img>
                    <p>
                    name name name name <br/> name name name <br/>
                    </p>
                </div>
                    <div className = "menu" >
                        <div className = "account"> My account </div>

                        <div className = "review"> Reviews and Ratings </div>

                        <div className = "logout"> log out </div>
                    </div>
            </div>


            <div className = "main-container">
                <div className = "header-title">
                    CAFECO
                </div>
                <div className = "body-container">
                    reviews
                    <div className = "reviews">
                        <div className = "reviewItem">
                        item 1
                        </div>

                        <div className = "reviewItem">
                        item 2
                        </div>

                        <div className = "reviewItem">
                        item 3
                        </div>

                        <div className = "reviewItem">
                        item 4
                        </div>

                        <div className = "reviewItem">
                        item 5
                        </div>

                        <div className = "reviewItem">
                            item 6
                        </div>

                        <div className = "reviewItem">
                            item 7
                        </div>

                        <div className = "reviewItem">
                            item 8
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
