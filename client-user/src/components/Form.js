import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import * as API from '../utils/api'

import '../styles/main.css'

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

        // API.createUser(this.state).then(res => console.log('post', res))
        // API.login({ username: this.state.username, password: this.state.password }).then(res => console.log(res))

        // // // API.getRewardsByUserID(this.state.username).then(res => console.log(res))
        // API.editUser('asd' , this.state ).then(res => console.log('put', res))

        // API.getUser(this.state).then(res => console.log('get', res))
        // API.deleteUser(this.state.username).then(res => console.log(res))


    }


    render(){
        return(
            <div>
                <div className={'input-label'}>
                    User Name:
                </div>
                <input placeholder={'username'} type="text" value={this.state.username} ref="usernameIN" onChange={this.handleChange}/>
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

                <Button variant="contained" color="primary" >
                    Hello World
                </Button>

                <List>
                    <ListItem>
                        asdaskdh
                    </ListItem>

                    <ListItem>
                        asdaskdh
                    </ListItem>

                    <ListItem>
                        asdasasdkdh
                    </ListItem>
                </List>

            </div>
        )
    }
}

export default Form;
