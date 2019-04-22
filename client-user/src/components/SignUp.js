import React, { Component } from 'react';


import * as API from '../utils/api'

import '../styles/main.css'

class SignUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            fname: '',
            lname: '',
            email: '',
            password: '',
            cpassword: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = () => {
        this.setState({
            username: this.refs.usernameIN.value,
            fname: this.refs.fnameIN.value,
            lname: this.refs.lnameIN.value,
            email: this.refs.emailIN.value,
            password: this.refs.passwordIN.value,
            cpassword: this.refs.cpasswordIN.value,
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

    closeSignUp = () => {
        this.props.closeSignUp()
    }


    render(){

        if (this.props.visible) {
            return (
                <div className={'signup'}>

                    <div
                        className={'signup-backdrop'}
                        onClick={this.closeSignUp}
                    ></div>

                    <div className={'signup-container'}>

                        <div className={'signup-title'}>
                            Register
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
                            placeholder={'First Name'}
                            type="text"
                            value={this.state.fname}
                            ref="fnameIN"
                            onChange={this.handleChange}/>

                        <input
                            className={'signup-input'}
                            placeholder={'Last Name'}
                            type="text"
                            value={this.state.lname}
                            ref="lnameIN"
                            onChange={this.handleChange}/>

                        <input
                            className={'signup-input'}
                            placeholder={'Email'}
                            type="text"
                            value={this.state.email}
                            ref="emailIN"
                            onChange={this.handleChange}/>

                        <input
                            className={'signup-input'}
                            placeholder={'Password'}
                            type={'password'}
                            value={this.state.password}
                            ref="passwordIN"
                            onChange={this.handleChange}/>

                        <input
                            className={'signup-input'}
                            placeholder={'Confirm Password'}
                            type={'password'}
                            value={this.state.cpassword}
                            ref="cpasswordIN"
                            onChange={this.handleChange}/>


                        <button
                            className={'signup-button'}
                            onClick={this.handleSubmit}>Sign Up
                        </button>


                    </div>

                </div>
            )

        } else {
            return (
                <div/>
            )
        }
    }
}

export default SignUp;
