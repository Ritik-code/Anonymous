import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./Navbar/styles";
import { Link, useHistory, useLocation } from "react-router-dom";

const Footer = () => {
  
  const classes = useStyles();

  

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        
        
      <Typography className={classes.root}>
  <Link href="https://github.com/ShashankAgrawal003" >
  @Shashank
  </Link>
  <br></br>
  <Link href="https://github.com/vanshika0307"  >
  @Vanshika
  </Link>
  <br></br>
  <Link href="https://github.com/shalinikumari50" >
  @Shalini
  </Link>
  <br></br>
  <Link href="https://github.com/Ritik-code"  >
  @Ritik
  </Link> 
  <br></br>
  <Link href="https://github.com/ADDY-AK"  >
  @Adarsh
  </Link> 
  
</Typography>
      
    </AppBar>
  );
};

export default Footer;
