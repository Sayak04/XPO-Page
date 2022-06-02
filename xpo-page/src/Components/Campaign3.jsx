import React, { Component } from "react";
import "./Campaign3.css";
import { FiPercent } from "react-icons/fi";
import { BsInfoCircleFill } from "react-icons/bs";

export default class Campaign3 extends Component {
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p>3</p>
            </div>
            <div className="line campaign3-line"></div>
          </div>
          <div className="campaign-box">
            <h2>Campaign Info</h2>

            {/* Top Container */}
            <div className="top-container">
              <div className="first-container">
                <label>
                  <p className="upper-text">
                    Objective <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      Traffic
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
                  <p className="upper-text">
                    {" "}
                    Advertiser <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      {" "}
                      Identifix
                    </option>
                    <option value="Lambda">Lambda</option>
                    <option value="Phi">Phi</option>
                    <option value="Theta">Theta</option>
                    <option value="Omega">Omega</option>
                  </select>
                </p>
              </div>
            </div>

            {/* Middle Container */}
            <div className="top-container second-middle-container">
              <div className="first-container">
                <label>
                  <p className="upper-text"> KPI</p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      {" "}
                      CTR{" "}
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
                  <p className="upper-text"> KPI Amount </p>
                </label>
                <div className="flex-container-label">
                  <input type="number" placeholder="Not Set" />
                  <div className="percentage">
                    <FiPercent />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Middle Container */}
            <div className="top-container thrid-middle-container">
              <div className="first-container">
                <label>
                  <p className="upper-text">
                    {" "}
                    Facebook Ad Account <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      {" "}
                      Identifix{" "}
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
                <div className="message-container message-container-campaign3">
                  Please select Facebook Ad Account you want to use for this
                  campaign
                </div>
              </div>
              <div className="second-container">
                <label>
                  <p className="upper-text">

                    Google Ad Account <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>

                      Identifix
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
                <div className="message-container message-container-campaign3">
                  Please select Google Ad Account you want to use for this
                  campaign
                </div>
              </div>
              <div className="third-container">
                <label>
                  <p className="upper-text">
                    {" "}
                    LinkedIn Ad Account <span>*</span>
                  </p>
                </label>
                <p className="label-container">
                  <select>
                    <option hidden selected>
                      Select LinkedIn Account
                    </option>
                    <option value="Alpha">Alpha</option>
                    <option value="Beta">Beta</option>
                    <option value="Gamma">Gamma</option>
                    <option value="Delta">Delta</option>
                  </select>
                </p>
                <div className="message-container message-container-campaign3">
                  Please select LinkedIn Ad Account you want to use for this
                  campaign
                </div>
              </div>
            </div>

            {/* Penultimate Container */}
            <div className="top-container penultimate-container">
              <div className="first-container">
                <label>
                  <p className="upper-text"> Campaign Category </p>
                </label>
                <div className="checkboxes">
                  <div className="first-checkbox">
                    <input type="radio" name="radAnswer" />
                    <p> General </p>
                  </div>
                  <div className="second-checkbox">
                    <input type="radio" name="radAnswer" />
                    <p> Special Ad Category </p>
                  </div>
                  <div className="third-checkbox">
                    <BsInfoCircleFill size={15} color={"rgb(197, 194, 194"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="top-container last-container">
              <p className="last-label">
                <select>
                  <option hidden selected>
                    Dynamic Search Ads Settings
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
      </>
    );
  }
}
