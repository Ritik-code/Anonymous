import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";

const Footer = () => {
  
  const classes = useStyles();

  

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        
        <h3 className={classes.heading}>CREATED BY:-</h3>
        
      <Typography className={classes.root}>
  <Link className={classes.git} href="https://github.com/ShashankAgrawal003" >
  <strong>Shashank</strong>
  </Link>
  </Typography>

  <br></br>

  <Typography className={classes.root}>
  <Link className={classes.git} href="https://github.com/vanshika0307"  >
  <strong>Vanshika</strong>
  </Link>
  </Typography>
  
  <br></br>

  <Typography className={classes.root}>
  <Link className={classes.git} href="https://github.com/shalinikumari50" >
  <strong>Shalini</strong>
  </Link>
  </Typography>

  <br></br>

<Typography className={classes.root}>
<Link className={classes.git} href="https://github.com/Ritik-code"  >
  <strong>Ritik</strong>
  </Link> 
</Typography>

  <br></br>

  <Typography className={classes.root}>
  <Link className={classes.git} href="https://github.com/ADDY-AK"  >
  <strong>Adarsh</strong>
  </Link>
  </Typography>
 
      
    </AppBar>
  );
};

export default Footer;
