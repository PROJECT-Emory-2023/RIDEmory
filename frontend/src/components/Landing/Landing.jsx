import React from "react";
import './landing.scss';
import { Button } from "..";

const Landing = () => {
    return (
        <div className="landingpg">
            <div className="landingpg-content-1">
                <input type="text" placeholder="Going to" id="going" />
                <input type="text" placeholder="From" id="from" />
                <Button className="search-btn">Search</Button>
            </div>
            <p>Plan your travels</p>
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