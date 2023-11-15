import React from "react";
import './landing.scss';
import { Button } from "..";
import { headerbg, location } from "../../assets/images";

const Landing = () => {
    return (
        <div className="landingpg">
            <div className="landingpg-content-1">
                <input type="text" placeholder="Going to" id="going" />
                <img src={location} alt="location logo" />
                <input type="text" placeholder="From" id="from" />
                <Button className="search-btn">Search</Button>
            </div>
            <p className="words">Plan your travels</p>
            <div className="landingpg-content-2">
                <div className="landingpg-big-box">
                    <p>Next Ride</p>
                    <div className="box">
                    </div>
                    <div className="box">
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Landing