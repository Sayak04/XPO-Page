import React, { Component } from "react";
import "./Campaign6.css";
import { ImDownload3 } from "react-icons/im";
import Image from "./Images/india-google-map.jpg";

export default class Campaign6 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p> 6 </p>
            </div>
            <div className="line campaign6-line"></div>
          </div>
          <div className="campaign-box">
            <h2>Targeting</h2>
            <div className="first-container-campaign6">
              <p className="headline">Languages</p>
              <p className="headline right-headline">+ LANGUAGE</p>
              <div className="name-remove flex">
                <div className="name">NAME</div>
                <div className="remove">Remove All</div>
              </div>
              <div className="last-text faded-campaign6">
                No language targeting is set
              </div>
            </div>
            <div className="second-container-campaign6">
              <div className="top-top flex">
                <div className="headline">Geo Location</div>
                <p className="label-container label-campaign6">
                  <select>
                    <option hidden selected>
                      Location Option
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
              </div>
              <div className="second-second flex">
                <p className="label-container second-label-campaign6">
                  <select>
                    <option hidden selected>
                      Please inout latitude/longitude, street address, postal
                      code, city or country
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
                <button className="import-geo-btn">
                  <ImDownload3 /> Import Geo List
                </button>
              </div>

              {/* Image Container */}
              <div className="image-container">
                <img className="image-india" src={Image} alt="India Map" />
              </div>
              <div className="name-remove-bid-adj flex">
                <div className="name">NAME</div>
                <div className="BID_ADJ">BID ADJ.</div>
                <div className="remove">Remove All</div>
              </div>

              {/* Country Container */}
              <div className="country-container flex">
                <div className="text-country">
                  <div className="all-country">
                    All Countries
                    <button className="country-button">Country</button>
                  </div>
                </div>
                <div className="include-exclude">
                  <button className="country-button include">Include</button>
                  <button className="country-button exclude">Exclude</button>
                </div>
              </div>

              {/* Display Location Container */}
              <div className="message-container display-container">
                Displaying 1-1 of 1 Location.
              </div>
            </div>
            <div className="last-container-campaign6">
              <div className="headline">Day & Time</div>
              <div className="middle-last flex">
                <div className="buttons">
                  <button className="middle-last-btn">All Days</button>
                  <button className="middle-last-btn">Weekend</button>
                  <button className="middle-last-btn">Weekdays</button>
                  <button className="middle-last-btn">
                    Weekdays(9am - 5pm)
                  </button>
                </div>
                <div className="end-text">Clear All</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
