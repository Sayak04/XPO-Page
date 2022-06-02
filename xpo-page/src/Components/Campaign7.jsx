import React, { Component } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import "./Campaign7.css";

export default class Campaign7 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p> 7 </p>
            </div>
            <div className="line campaign7-line"></div>
          </div>
          <div className="campaign-box">
            <h2>Attribution</h2>
            <div className="top-container">
              <div className="first-container">
                <label>
                  <p className="upper-text"> Footfall attribution </p>
                </label>
                <BsInfoCircleFill
                  size={15}
                  color={"rgb(197, 194, 194"}
                  style={{ marginLeft: "0.2rem" }}
                />
                <div className="checkboxes">
                  <div className="first-checkbox">
                    <input type="radio" name="radAnswer" />
                    <p> No </p>
                  </div>
                  <div className="second-checkbox">
                    <input type="radio" name="radAnswer" />
                    <p> Yes (USD 1.00 CPM fees applies) </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-container second7">
              <div className="second-container">
                <label>
                  <p className="upper-text"> Conversion Goals </p>
                </label>
                <div className="flex-container-label">
                  <p className="label-container ">
                    <select>
                      <option hidden selected>
                        Select...
                      </option>
                      <option value="Alpha">Alpha</option>
                      <option value="Beta">Beta</option>
                      <option value="Gamma">Gamma</option>
                      <option value="Delta">Delta</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
