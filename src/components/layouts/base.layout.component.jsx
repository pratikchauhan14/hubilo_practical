import React from 'react';
import HeaderComponent from "../header/header.component";
import {Sidebar} from "../sidebar/sidebar";

const BaseLayout = ({children})=>{
    return(
        <React.Fragment>
            <HeaderComponent/>
            <Sidebar/>
            <div className="main-body">
                <div className="main-body-inner">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
};

export default BaseLayout;