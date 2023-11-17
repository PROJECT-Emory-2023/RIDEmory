import React from "react";
import './landing.scss';
import { Button } from "..";
import { headerbg, location, arrow } from "../../assets/images";

const Landing = () => {
    return (
        <div className="landingpg">
            <div className="landingpg-content-1">
                <div class="landingpg-input">
                    <img src={location} alt="location logo" />
                    <input type="text" placeholder="Going to" id="going" />
                </div>
                <div class="landingpg-input">
                    <img src={location} alt="location logo" />
                    <input type="text" placeholder="From" id="from" />
                </div>
                <Button className="search-btn"><p className="search-btn-p">Search</p></Button>
            </div>
            <p className="words">Plan your travels</p>
            <div className="landingpg-content-2">
                <div className="landingpg-big-box">
                    <p>Next Ride</p>
                    <div className="boxes">
                        <div className="box">
                            <img src={arrow} alt="arrow thing"/>
                            <div className="info">
                                <p className="box-time">02:00pm</p>
                                <p className="box-one">From: Main Campus</p>
                                <p className="box-two">To: Airport</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={arrow} alt="arrow thing"/>
                            <div className="info">
                                <p className="box-time">08:00pm</p>
                                <p className="box-one">From: Clairmont Campus</p>
                                <p className="box-two">To: Airport</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Landing