import React, { Component } from "react";

export default class Campaign4 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p> 4 </p>
            </div>
            <div className="line" style={{height: '10rem'}}></div>
          </div>
          <div className="campaign-box">
            <h2>Campaign Name</h2>
            <div className="top-container">
              <div className="first-container">
                <label>
                  <p className="upper-text">
                    Timezone <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      (UTC-07:00) US/Arizona
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
              </div>
              <div className="second-container">
                <label>
                  <p className="upper-text"> Start Date </p>
                </label>
                <div className="flex-container-label">
                  <input type="number" placeholder="Immediately" />
                </div>
              </div>
              <div className="third-container">
                <label>
                  <p className="upper-text"> End Date </p>
                </label>
                <div className="flex-container-label">
                  <input type="number" placeholder="03/19/2022 11:59 PM" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
