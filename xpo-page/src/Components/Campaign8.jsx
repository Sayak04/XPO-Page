import React, { Component } from "react";
import styled from "styled-components";

export default class Campaign8 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p> 8 </p>
            </div>
            <div className="line" style={{height: '10rem'}}></div>
          </div>
          <div className="campaign-box">
            <h2> Management Fees </h2>
            <div className="top-container">
              <div className="checkboxes" style={{flexDirection:'column', marginLeft:'1.5rem'}}>
                <div className="radio1">
                  <input type="radio" name="radAnswer" />
                  <Label>No Management Fees</Label>
                </div>
                <div className="radio2">
                  <input type="radio" name="radAnswer" />
                  <Label>
                    Add additional management fees to this campaign.
                  </Label>
                </div>
                <div className="message-container message-container-campaign3" style={{marginLeft:'0.9rem', marginTop:'0rem'}}>
                  To include management fees based on any additional services provided.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 500;
    font-family: 'Noto Sans', sans-serif;
    margin-left: 0.4rem;
`