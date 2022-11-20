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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="baseline"
        >
          <Grid item xl={12}>
            <h1>Explore, collect, and sell NFTs</h1>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
