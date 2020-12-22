import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

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

            <SearchResult 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usgp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest&nbsp;&nbsp;1 bedroom&nbsp;&nbsp;
            1 bed&nbsp;&nbsp;1.5 shared bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"
            />

            <SearchResult 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usgp=CAU"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest&nbsp;&nbsp;1 bedroom&nbsp;&nbsp;
            1 bed&nbsp;&nbsp;1.5 shared bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"
            />
        </div>
    )
}

export default SearchPage;
