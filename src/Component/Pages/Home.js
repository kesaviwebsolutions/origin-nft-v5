import React from "react";
import Navbar from "./Navbar";
import globe from "../Images/globe.png";
import { Grid, Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid container className="globe">
        <Navbar />
        <Grid container direction="row" justifyContent="center">
          <Grid item xl={12}>
            <h1 className="heading-explore">
              Explore, collect, and sell NFTs <br />
              <button className="button-explore">Explore</button> &nbsp;
              <button className="button-sell">Sell</button>
            </h1>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
