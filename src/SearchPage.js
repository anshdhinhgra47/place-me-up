import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';

function SearchPage() {
    return (
        <div className="search__page">
           <div className="searchpage__info">
                <p>62 Stays&nbsp;&nbsp;26 August&nbsp;TO&nbsp;30 August&nbsp;&nbsp;2 Guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
           </div>
        </div>
    )
}

export default SearchPage;
