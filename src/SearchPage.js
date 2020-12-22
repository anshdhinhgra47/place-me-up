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
            description="1 Guest&nbsp;&nbsp;1 Bedroom&nbsp;&nbsp;
            1 Bed&nbsp;&nbsp;1.5 Shared Bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"
            />

            <SearchResult 
            img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
            location="Private room in center of London"
            title="Independent luxury studio in London"
            description="2 Guest&nbsp;&nbsp;3 Bedroom&nbsp;&nbsp;
            1 Bed&nbsp;&nbsp;1.5 Shared Bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={4.3}
            price="$40 / night"
            total="$167 total"
            />

            <SearchResult 
            img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
            location="Private room in center of London"
            title="London Studio Apartments"
            description="4 Guest&nbsp;&nbsp;4 Bedroom&nbsp;&nbsp;
            4 Bed&nbsp;&nbsp;2 Shared Bathroom&nbsp;&nbsp;
            Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={3.8}
            price="$35 / night"
            total="$297 total"
            />

            <SearchResult 
            img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
            location="Private room in center of London"
            title="30 mins to Oxford Street, Excel London"
            description="1 Guest&nbsp;&nbsp;1 Bedroom&nbsp;&nbsp;
            1 Bed&nbsp;&nbsp;1.5 Shared Bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={4.1}
            price="$55 / night"
            total="$320 total"
            />

            <SearchResult 
            img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus.london.jpg"
            location="Private room in center of London"
            title="Spacious Peaceful Modern Bedroom"
            description="3 Guest&nbsp;&nbsp;1 Bedroom&nbsp;&nbsp;
            1 Bed&nbsp;&nbsp;1.5 Shared Bathroom&nbsp;&nbsp;WiFi
            &nbsp;&nbsp;Kitchen&nbsp;&nbsp;Free Parking&nbsp;&nbsp;
            Washing Machine"
            star={5}
            price="$60 / night"
            total="$450 total"
            />
        </div>
    )
}

export default SearchPage;
