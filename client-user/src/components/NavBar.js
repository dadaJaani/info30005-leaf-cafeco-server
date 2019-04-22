import React, { Component } from 'react'



import SignUp from './SignUp'
import LogIn from './LogIn'



class NavBar extends Component {

    constructor (props) {
        super(props)

        this.state = {
            viewSignup: false,
            viewLogin: false,

        }
    }

    showLogin = () => {
        this.setState({
            viewLogin: true,
        })
    }

    closeLogin = () => {
        this.setState({
            viewLogin: false,
        })
    }


    showSignup = () => {
        this.setState({
            viewSignup: true,
        })
    }

    closeSignUp = () => {
        this.setState({
            viewSignup: false,
        })
    }

    render () {
        return (
            <div className={'navbar-container'}>

                <LogIn visible={this.state.viewLogin} closeLogin={this.closeLogin} />
                <SignUp  visible={this.state.viewSignup} closeSignUp={this.closeSignUp} />

                <div className={'navbar-item'}>
                    <button className={'navbar-button navbar-item'}>
                        Become A Partner
                    </button>
                </div>


                <div
                    className={'navbar-logo navbar-item'}
                >CAFECO </div>


                { this.props.userLoggedIn
                    ? (<div className={'navbar-item navbar-buttons'}>
                            <button
                                className={'navbar-button'}
                            >
                                My Profile
                            </button>

                            |

                            <button
                                className={'navbar-button'}
                            >
                                Rewards
                            </button>
                        </div>)



                    : (<div className={'navbar-item navbar-buttons'}>
                            <button
                                className={'navbar-button'}
                                onClick={this.showLogin}
                            >
                                Log In
                            </button>

                            |

                            <button
                                className={'navbar-button'}
                                onClick={this.showSignup}
                            >
                                Register
                            </button>
                        </div>)

                }



            </div>
        )
    }
}



export default NavBar