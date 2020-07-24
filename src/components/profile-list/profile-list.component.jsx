import React from 'react';

import './profile-list.styles.scss';

const PROFILE_LIST_DATA = [
    {
        name:'Test Name',
        imageUrl:'./assets/images/profile.jpg'
    }
]


const ProfileList = ({imageUrl = './assets/images/profile.jpg'}) =>{
    return(
        <React.Fragment>
            <div className="profile-list">
                <div className="single-profile">
                    <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="" />
                </div>
                <div className="single-profile">
                    <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="" />
                </div>
                <div className="single-profile">
                    <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="" />
                </div>
                <div className="single-profile">
                    <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt="" />
                </div>
                <div className="single-profile all-btn">
                    3
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileList;