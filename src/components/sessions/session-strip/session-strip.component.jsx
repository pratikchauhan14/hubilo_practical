import React from 'react';
import ProfileList from "../../profile-list/profile-list.component";
import Button from "@material-ui/core/Button";
import ButtonBase from '@material-ui/core/ButtonBase';

import './session-strip.styles.scss';

const SESSION_SLOTE_DATA = [
    {
        timeSlote:"10:00 AM",
        slote:[
            {
                title:'Session #1',
                tooltip:'Track Name',
                time:'10:00 am - 11:00 am',
                place:'Seminar Hall #2'
            },
            {
                title:'Session #1',
                tooltip:'Track Name',
                time:'10:00 am - 11:00 am',
                place:'Seminar Hall #2'
            },
            {
                title:'Session #1',
                tooltip:'Track Name',
                time:'10:00 am - 11:00 am',
                place:'Seminar Hall #2'
            }
        ]
    },
    {
        timeSlote:"11:00 AM",
        slote:[
            {
                title:'Session #1',
                tooltip:'Track Name',
                time:'10:00 am - 11:00 am',
                place:'Seminar Hall #2'
            }
        ]
    }
]



const SessionSlote = () =>{
    return(
        <React.Fragment>
            <div className="session-slote">
                {
                    SESSION_SLOTE_DATA.map(({slote,timeSlote},index)=>(
                        <div key={index} className="single-slote">
                            <div className="time">
                                {timeSlote}
                            </div>
                            <div className="time-slote-wrapper">
                                {
                                    slote.map(({},index)=>(
                                        <div className="time-slote">
                                            <label>
                                                <div className="tooltip">
                                                    <div className="tooltip-content">
                                                        Track Name
                                                    </div>
                                                </div>
                                                Session #1
                                            </label>
                                            <ul>
                                                <li>10:00 am - 11:00 am</li>
                                                <li>Seminar Hall #2</li>
                                            </ul>
                                            <div className="fx fx-center fx-space">
                                                <ProfileList/>
                                                <div className="btn-wrapper icon-btn-wrapper">
                                                    <ButtonBase aria-label="delete">
                                                        <img src={`${process.env.PUBLIC_URL}./assets/images/icon/video.svg`} alt="" />
                                                    </ButtonBase>
                                                    <ButtonBase aria-label="delete">
                                                        <img src={`${process.env.PUBLIC_URL}./assets/images/icon/trash-2-bold.svg`} alt="" />
                                                    </ButtonBase>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="add-btn icon-btn-wrapper fx fx-center fx-space-center">
                                <ButtonBase aria-label="delete">
                                    <img src={`${process.env.PUBLIC_URL}./assets/images/icon/add-icon.svg`} alt="" />
                                </ButtonBase>
                            </div>
                        </div>
                    ))
                }

            </div>
        </React.Fragment>
    )
}

export default SessionSlote;