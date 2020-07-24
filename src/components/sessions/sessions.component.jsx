import React from 'react';

import Typography from '@material-ui/core/Typography';
import SearchBox from "../searchbox/searchbox.component";

import Grid from '@material-ui/core/Grid';
import {ButtonStyled , ButtonOutline} from "../button/button.component";
import DayFilter from "../day-filter/day-filter.component";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import SessionSlote from "./session-strip/session-strip.component";

const Sessions = ({boxTitle="Sessions"}) =>{

    const [state, setState] = React.useState({
        slote: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return(
        <React.Fragment>
            <div className="sessions-box white-box-wrapper">
                <Typography className="white-box-title" variant="h3">{boxTitle}</Typography>
                <div className="white-box">
                    <div className="box-header">
                        <Grid
                        justify="space-between"
                        alignItems="center"
                        container>
                            <Grid item xs={4}>
                                <SearchBox/>
                            </Grid>
                            <Grid item>
                                <div className="btn-group">
                                    <ButtonOutline>Add Day</ButtonOutline>
                                    <ButtonStyled>Add Session</ButtonStyled>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="box-body">
                        <Grid className="filter-bar" container justify="space-between" alignItems="center">
                            <Grid item>
                                <DayFilter/>
                            </Grid>
                            <Grid item className="session-filter-right">
                                <div className="cs-checkbox">
                                    <FormControlLabel
                                        label="EMPTY SLOTS"
                                        control={<Switch checked={state.slote} onChange={handleChange} name="slote" />}
                                    />
                                </div>
                                <div className="icon-filter">
                                    <ButtonBase>
                                        <label>3</label>
                                       <img alt="" src={`${process.env.PUBLIC_URL}./assets/images/icon/filter.svg`}/>
                                    </ButtonBase>
                                    <ButtonBase>
                                        <img alt="" src={`${process.env.PUBLIC_URL}./assets/images/icon/calendar.svg`}/>
                                    </ButtonBase>
                                    <ButtonBase>
                                        <img alt="" src={`${process.env.PUBLIC_URL}./assets/images/icon/trash-2.svg`}/>
                                    </ButtonBase>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid>
                            <SessionSlote/>
                        </Grid>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sessions;