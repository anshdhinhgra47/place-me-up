import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="search">
            
        </div>
    )
}

export default Search;
