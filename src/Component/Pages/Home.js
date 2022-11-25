import React from "react";
import Navbar from "./Navbar";
import { Grid, Box,Container } from "@mui/material";
import Swiperhome from "./HomeSwiper";
import HomeTab from "./HomeTab";
import HomeNotable from "./HomeNotable";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid container className="globe ">
        <Navbar />
        <Grid container>
          <Grid item xl={12}>
            <h1 className="heading-explore">
              Explore, collect, and sell NFTs <br />
              <button className="button-explore">Explore</button> &nbsp;
              <button className="button-sell">Sell</button>
            </h1>
          </Grid>
        </Grid>
      </Grid>
      <Swiperhome />
<HomeTab />
<HomeNotable />

    </>
  );
}

export default Home;
