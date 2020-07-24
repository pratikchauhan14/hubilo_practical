import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {ButtonStyled } from "../button/button.component";

import * as Icon from 'react-feather';
import ProfileButton from "../button/profile-button.component";
import './header.styles.scss';

const HeaderComponent = ({imageUrl='./assets/images/logo.png' }) =>{
    return(
        <React.Fragment>
            <Grid className={`header`}>
                <div className={`header-header`}>
                    <div className={`fx fx-space`}>
                        <div className={`logo fx fx-center`}>
                            <Link href={`#`}>
                                <img alt={`Logo`} src={`${process.env.PUBLIC_URL}${imageUrl}`} />
                            </Link>
                            <Typography variant="h4">The August Fest 219</Typography>
                        </div>
                        <div className={`header-action-strip`}>
                            <ul>
                                <li className="button-group">
                                    <Button>Go Live</Button>
                                    <ButtonStyled>Upgrade</ButtonStyled>
                                </li>
                                <li className="fx fx-center notification">
                                    <Button className="no-radius" href={`#`}><Icon.Bell /></Button>
                                </li>
                                <li>
                                    <ProfileButton/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )
}


export  default  HeaderComponent;