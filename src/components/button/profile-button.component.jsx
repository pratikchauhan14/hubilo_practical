import React from 'react';

import Button from '@material-ui/core/Button';

const ProfileButton = ({imageUrl = './assets/images/profile.jpg' , name="Mitchel Johnson" })=>{
    return(
        <React.Fragment>
            <Button className={"profile-button no-radius"}>
                <img src={`${process.env.PUBLIC_URL}${imageUrl}`} alt=""/>
                {name}
            </Button>
        </React.Fragment>
    )
}


export default ProfileButton;