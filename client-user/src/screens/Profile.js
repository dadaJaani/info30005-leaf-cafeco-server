import React, { Component } from 'react'

import NavBar2 from '../components/NavBar2'


class Profile extends Component {



    render () {
        return(
            <div>
                <NavBar2 logOut={this.props.logOut}/>

                <div className={'profile-container'}>
                    <div className={'profile-item1'}>
                        <img
                            className={'profile-info-image'}
                            src='http://rsrgentertainment.com/wp-content/uploads/2018/11/stan.jpg'
                            alt='profile'
                        />

                        <div>Name</div>

                        <div>Email</div>

                    </div>

                    <div className={'profile-item2'}>
                        <div className={'profile-points-number'}>
                            326
                        </div>
                        <div className='profile-points-text'>
                            points
                        </div>

                        <input className='profile-points-input'/>
                        <button
                            className='profile-points-button'
                        >Reedem Code</button>
                    </div>

                    <div className={'profile-item3'}>
                        <div className={'history-container'}>
                            History
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>

                                <div className='history-item-info'>
                                    <div className='history-item-name'>REstaurannt Name</div>
                                    <div className='history-item-info2'>
                                        <div className='history-item-types'>Type</div>
                                        <div className='history-item-date'>Date </div>
                                    </div>

                                </div>


                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                            <div className='history-item'>
                                <div className='history-item-points'>Points </div>
                                <div className='history-item-name'>REstaurannt Name</div>
                                <div className='history-item-types'>Type</div>
                                <div className='history-item-date'>Date </div>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
        )
    }
}

export default Profile