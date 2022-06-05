import React, { Component } from "react";
import "./CSS/Campaign1.css";
import "./CSS/Campaign2.css";
import { TbWorldUpload } from "react-icons/tb";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export default class Campaign2 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p>2</p>
            </div>
            <div className="line campaign2-line"></div>
          </div>
          <div className="campaign-box">
            <h2>Select One or More Channels</h2>
            <div className="inside-container">
              <div className="four-containers">
                <div className="programmatic">
                  <input type="checkbox" className="checkbox"/>
                  <TbWorldUpload className="icon" size={45} color={'rgb(136, 136, 4)'}/>
                  <p> Programmatic </p>
                </div>
                <div className="facebook">
                  <input type="checkbox" className="checkbox"/>
                  <BsFacebook className="icon" size={45} color={'rgb(66, 103, 178)'}/>
                  <p> Facebook </p>
                </div>
                <div className="search">
                  <input type="checkbox" className="checkbox"/>
                  <FaSearch className="icon" size={45} color={'brown'}/>
                  <p> Search </p>
                </div>
                <div className="linkedin">
                  <input type="checkbox" className="checkbox"/>
                  <BsLinkedin className="icon" size={45} color={'rgb(66, 103, 178)'}/>
                  <p> LinkedIn </p>
                </div>
              </div>
            </div>
            <div className="message-container">
              * Programmatic channels include Connected Tvs, OTT, Video, Audio,
              Display, Native and Email.
            </div>
          </div>
        </div>
      </>
    );
  }
}
