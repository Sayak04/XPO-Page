import React, { Component } from "react";
import './Campaign1.css';
import './Campaign2.css';

export default class Campaign2 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p>2</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="campaign-box">
            <h2>
                Select One or More Channels
            </h2>
            <div className="inside-container">

            </div>
            <div className="message-container">
                * Programmatic channels include Connected Tvs, OTT, Video, Audio, Display, Native and Email. 
            </div>
          </div>
        </div>
      </>
    );
  }
}
