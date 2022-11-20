import React, { useState } from "react";
import Navbaroffcanvas from "./Navbaroffcanvas";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import { Grid } from "@mui/material";

import avtaricon from "../Images/avtar-icon.png";
import walleticon from "../Images/wallet-icon.png";
import carticon from "../Images/cart-icon.png";
import logo from "../Images/logo.png";
import logoorigin from "../Images/logo-origin1.png";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Grid container className="navbar">
        <Grid item xl={3} lg={3} md={9} sm={9} xs={9} className="d-flex">
          <span>
            {" "}
            <img src={logo} alt="" />
          </span>
          <span>
            {" "}
            <img src={logoorigin} alt="" />
          </span>
        </Grid>
        <Grid item xl={9} lg={9} md={3} sm={3} xs={3} className="toggle-btn">
          <Navbaroffcanvas />
        </Grid>
        <Grid
          item
          xl={4}
          lg={3}
          md={3}
          sm={3}
          xs={3}
          className="navbar-desktop"
        ></Grid>
        <Grid
          item
          xl={5}
          lg={6}
          md={3}
          sm={3}
          xs={3}
          className="navbar-desktop"
        >
          <ul className="nav-icon">
            {" "}
            <li>
              <img src={avtaricon} alt="" />
            </li>
            <li>
              <img src={walleticon} alt="" />
            </li>
            <li>
              <img src={carticon} alt="" />
            </li>
          </ul>
          <ul className="nav-list">
            <li>Explore</li>
            <li>Stats</li>
            <li>Resources</li>
            <li>Create</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
