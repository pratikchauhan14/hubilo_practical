import React from 'react';
import BaseLayout from "../components/layouts/base.layout.component";
import Sessions from "../components/sessions/sessions.component";

const HomePage = () =>{
    return(
        <React.Fragment>
            <BaseLayout>
                <Sessions/>
            </BaseLayout>
        </React.Fragment>
    )
};

export default HomePage;