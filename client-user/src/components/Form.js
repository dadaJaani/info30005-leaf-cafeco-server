import React, { Component } from 'react'

import * as API from '../utils/api'

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            fname: '',
            lname: '',
            email: '',
            password: '',
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
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        // alert('A name was submitted: ' + this.state);
        API.createUser(this.state).then(res => console.log('post', res))
        API.getUser(this.state).then(res => console.log('get', res))
    }


    render(){
        return(
            <div>
                <label>
                    User Name:
                    <input type="text" value={this.state.username} ref="usernameIN" onChange={this.handleChange} />
                </label>
                <label>
                    First Name:
                    <input type="text" value={this.state.fname} ref="fnameIN" onChange={this.handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={this.state.lname} ref="lnameIN" onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} ref="emailIN" onChange={this.handleChange} />
                </label>
                <label>
                    PW:
                    <input type="text" value={this.state.password} ref="passwordIN" onChange={this.handleChange} />
                </label>

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;