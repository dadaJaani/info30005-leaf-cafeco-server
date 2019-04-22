import React, { Component } from 'react';


import * as API from '../utils/api'

import '../styles/main.css'

class LogIn extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = () => {
        this.setState({
            username: this.refs.usernameIN.value,
            password: this.refs.passwordIN.value,
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        // alert('A name was submitted: ' + this.state);

        API.createUser(this.state).then(res => console.log('post', res))
        // API.login({ username: this.state.username, password: this.state.password }).then(res => console.log(res))

        // // // API.getRewardsByUserID(this.state.username).then(res => console.log(res))
        // API.editUser('asd' , this.state ).then(res => console.log('put', res))

        // API.getUser(this.state).then(res => console.log('get', res))
        // API.deleteUser(this.state.username).then(res => console.log(res))


    }

    logIn = (event) => {
        event.preventDefault();
        this.closeLogin();



    }


    closeLogin = () => {
        this.props.closeLogin()
    }


    render(){
        console.log(this.props)
        if (this.props.visible) {
            return(
                <div  className={'signup'}>
                    <div
                        className={'signup-backdrop'}
                        onClick={this.closeLogin}
                    ></div>

                    <div className={'signup-container'}>

                        <div  className={'signup-title'}>
                            Log In
                        </div>

                        <input
                            className={'signup-input'}
                            placeholder={'Username'}
                            type="text"
                            value={this.state.username}
                            ref="usernameIN"
                            onChange={this.handleChange}
                        />


                        <input
                            className={'signup-input'}
                            placeholder={'Password'}
                            type={'password'}
                            value={this.state.password}
                            ref="passwordIN"
                            onChange={this.handleChange}/>



                        <button
                            className={'signup-button'}
                            onClick={this.handleSubmit}>Sign Up</button>

                    </div>

                </div>
            )
        } else {
            return(
                <div></div>
            )
        }

    }
}

export default LogIn;
