import React from "react";
import "./Navbar.css";
import { Grid } from "@mui/material";
import avtaricon from "../Images/avtar-icon.png";
import walleticon from "../Images/wallet-icon.png";
import carticon from "../Images/cart-icon.png";

function Navbar() {
  return (
    <>
      <Grid container>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
          a
        </Grid>
        <Grid item xl={6} lg={6} md={3} sm={3} xs={3}>
          v
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
          <ul className="nav-list">
            <li>Explore</li>
            <li>Stats</li>
            <li>Resources</li>
            <li>Create</li>
          </ul>
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
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
