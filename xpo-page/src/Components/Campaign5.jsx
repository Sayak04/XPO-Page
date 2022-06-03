import React, { Component } from "react";
import "./Campaign5.css";
import { Form } from "react-bootstrap";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";

export default class Campaign5 extends Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }
  render() {
    return (
      <>
        <div className="campaign-container">
          <div className="symbols">
            <div className="circle">
              <p>5</p>
            </div>
            <div className="line campaign5-line"></div>
          </div>
          <div className="campaign-box">
            <h2>Budget</h2>
            <div className="campaign5-top-container">
              <div className="campaign5-first-container">
                <div className="text-container">
                  <p className="bold">Automatic Budget Optimization</p>
                  <p className="faded">
                    Let Solera automatically allocate budget to adgroups that
                    are performing
                  </p>
                </div>
                <div className="on-icon-container">
                  <Form.Check
                    checked={this.state.checked}
                    type="switch"
                    id="custom-switch"
                  />
                </div>
              </div>

              {/* Second Container  */}
              <div className="campaign5-second-container">
                <div className="first-container">
                  <label>
                    <p className="upper-text">Overall Budget Cap</p>
                  </label>
                  <div className="flex-container-label">
                    <input type="number" placeholder="Not Set" />
                    <div className="usd">USD</div>
                  </div>
                </div>
                <div className="second-container">
                  <label>
                    <p className="upper-text">
                      Daily Budget Cap <span>*</span>
                    </p>
                  </label>
                  <div className="flex-container-label">
                    <input type="number" placeholder="Not Set" />
                    <div className="usd">USD</div>
                  </div>
                  <div className="msg-middle">
                    <input type="checkbox" />
                    <p className="daily-budget-checkbox">
                      Don't apply daily budget cap to add groups
                    </p>
                    <BsInfoCircleFill size={15} color={"rgb(197, 194, 194"} />
                  </div>
                </div>
                <div className="third-container">
                  <label>
                    <p className="upper-text">
                      Budget Type <span>*</span>
                    </p>
                  </label>
                  <p className="label-container">
                    <select>
                      <option hidden selected>
                        Daily
                      </option>
                      <option value="Alpha">Alpha</option>
                      <option value="Beta">Beta</option>
                      <option value="Gamma">Gamma</option>
                      <option value="Delta">Delta</option>
                    </select>
                  </p>
                </div>
              </div>

              {/* Third Container */}
              <div className="campaign5-third-container">
                <div className="programmatic-container">
                  <label className="flex">
                    <div className="side-circle green-blue"></div>
                    <p className="upper-text"> Programmatic </p>
                  </label>
                  <div className="sm-flex-container-label">
                    <input type="number" placeholder="25" />
                    <div className="percentage">
                      <FiPercent />
                    </div>
                  </div>
                </div>
                <div className="facebook-container">
                  <label className="flex">
                    <div className="side-circle blue-fa"></div>
                    <p className="upper-text"> Facebook </p>
                  </label>
                  <div className="sm-flex-container-label">
                    <input type="number" placeholder="25" />
                    <div className="percentage">
                      <FiPercent />
                    </div>
                  </div>
                </div>
                <div className="search-container">
                  <label className="flex">
                    <div className="side-circle red-brown"></div>
                    <p className="upper-text"> Search </p>
                  </label>
                  <div className="sm-flex-container-label">
                    <input type="number" placeholder="25" />
                    <div className="percentage">
                      <FiPercent />
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Last Container */}
              <div className="campaign5-first-container">
                <div className="text-container">
                  <p className="bold">
                    Apply Bidding Strategy to All Ad Groups
                  </p>
                  <p className="faded">
                    All add groups created will inherit and adopt this bidding
                    strategy. Each ad group will
                  </p>
                  <p className="faded">
                    not be able to use this individual bidding strategy.
                  </p>
                </div>
                <div className="on-icon-container flex">
                  <Form.Check
                    disabled
                    checked={this.state.checked}
                    type="switch"
                    id="custom-switch"
                  />
                  <BsInfoCircleFill
                    size={10}
                    color={"rgb(197, 194, 194"}
                    style={{ margin: "-0.2rem" }}
                  />
                </div>
              </div>

              {/* Second Last Conatiner */}
              <div className="second-last-container flex">
                <div className="first-container">
                  <label>
                    <p className="upper-text">
                      Bidding Strategy <span>*</span>
                    </p>
                  </label>
                  <p className="label-container">
                    <select>
                      <option hidden selected>
                        Lowest Cost
                      </option>
                      <option value="Alpha">Alpha</option>
                      <option value="Beta">Beta</option>
                      <option value="Gamma">Gamma</option>
                      <option value="Delta">Delta</option>
                    </select>
                  </p>
                </div>
                <div className="first-container">
                  <label>
                    <p className="upper-text">
                      Optimize For <span>*</span>
                    </p>
                  </label>
                  <p className="label-container">
                    <select>
                      <option hidden selected>
                        Maximize Clicks
                      </option>
                      <option value="Alpha">Alpha</option>
                      <option value="Beta">Beta</option>
                      <option value="Gamma">Gamma</option>
                      <option value="Delta">Delta</option>
                    </select>
                  </p>
                </div>
              </div>
              <div className="last-container">
                <p className="campaign5-last-label">
                  <select>
                    <option hidden selected>
                       Advanced Settings
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
      </>
    );
  }
}
