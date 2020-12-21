import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="home__banner">
            <div className="banner__search">
            {showSearch && <h1>SHOW DATE PICKER</h1>}
            <Button onClick={() => setShowSearch(!showSearch)}
            variant='outlined' className="banner__searchBtn">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
