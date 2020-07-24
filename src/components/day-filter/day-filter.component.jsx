import React from 'react';
import Button from "@material-ui/core/Button";
import * as Icon from "react-feather";
import './day-filter.styles.scss';

const DAY_FITLER_DATA = [
    {
        text:'Day 1',
        label:'5th June, 2020',
        isActive:true
    },
    {
        text:'Day 2',
        label:'6th June, 2020',
    },
    {
        text:'Day 3',
        label:'7th June, 2020',
    },
    {
        text:'Day 4',
        label:'8th June, 2020',
    }
];


const DayFilter = ()=>{
    return(
        <React.Fragment>
            <div className="day-filter">
                <Button className="arrow">
                    <Icon.ArrowLeftCircle/>
                </Button>
                <div className="filter-btn-group">
                    {
                        DAY_FITLER_DATA.map(({text,label,isActive = false},index)=>(
                            <Button key={index} className={`no-radius ${isActive?'active':''}`}>
                                {text}
                                <label>{label}</label>
                            </Button>
                        ))
                    }
                </div>
                <Button className="arrow">
                    <Icon.ArrowRightCircle/>
                </Button>
            </div>
        </React.Fragment>
    )
}

export default DayFilter;