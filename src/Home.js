import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home_page">
            <Banner />

            <div className="main__section">
                <Card />
                <Card />
                <Card />
            </div>

            <div className="main__section">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home;
