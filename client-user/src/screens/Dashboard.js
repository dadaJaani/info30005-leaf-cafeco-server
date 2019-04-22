import React, { Component } from 'react'


import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

import NavBar from '../components/NavBar'


class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            userLoggedIn: props,
            userInfo: props.user,
        }
    }


    render() {

        return (
            <div >

                <NavBar userLoggedIn={this.props.userLoggedIn}/>


            </div>
        );
    }
}

export default Dashboard;
