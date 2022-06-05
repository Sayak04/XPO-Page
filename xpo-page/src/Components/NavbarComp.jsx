import React from "react";
import "./CSS/NavbarComp.css";
import { Nav, NavDropdown} from "react-bootstrap";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import {AiFillCaretDown} from "react-icons/ai";
class NavbarComp extends React.Component {
  render() {
    return (
      <>
        <nav className="main-nav">
          {/* Logo */}
          <div className="logo">
            <h2>Solera</h2>
          </div>

          {/* Middle  Menu */}
          <div className="menu-link">
            <ul>
              <li>
                <Nav.Link href="#campaigns">Campaigns</Nav.Link>
              </li>
              <li>
                <NavDropdown title="Audience" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Creative" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Catalogs" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Utility" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Reports" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Pixel" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Settings" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>

          {/* Right Most Menu */}
          <div className="right-container">
            <div className="bell-icon">
              <BsFillBellFill size={30} />
            </div>
            <div className="usd-icon">
                <AiFillDollarCircle size={30} />
                <span>USD</span>
            </div>
            <div className="extreme-container">
              <p className="name-salutation">Hi, Hugo Solis</p>
              <div className="bottom-container">
                <p className="identity">Identifix</p>
                <div className="button">
                  <div class="button-18" role="button">Account</div>
                </div>
                <AiFillCaretDown style={{cursor: "pointer"}} />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default NavbarComp;
