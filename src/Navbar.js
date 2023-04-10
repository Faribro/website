import React from "react";
import { NavLink } from "react-router-dom";
import "../src/App.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav bg">
        <div className="row flex-grow-1">
          <div className="col-26 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">
                  LOGO
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                      <NavLink
                        active
                        ClassName="menu-active"
                        exact
                        class="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li> */}

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Service">
                        Service
                      </NavLink>
                    </li>

                    <li class="nav-item">
                      <NavLink className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>

                    <li class="nav-item">
                      <NavLink className="nav-link" to="/Contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
