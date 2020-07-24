/* eslint-disable no-use-before-define */
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import * as Icon from 'react-feather';
import './searchbox.styles.scss';

const SearchBox = () => {
    return (
            <div className="search-box">
                <div className="search-icon">
                    <Icon.Search/>
                </div>
                <InputBase
                    placeholder="Search…"
                    className={"search"}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
    );
}

export default SearchBox;

