import React from "react";
import { AppBar, Typography} from "@material-ui/core";
import useStyles from "./styles";

const Footer = () => {
  
  const classes = useStyles();

  

  return (
    <div>
    <AppBar className={classes.appBar} position="static" color="inherit">
        
        <h3 className={classes.heading}>CREATED BY:-</h3>
        
      <Typography className={classes.root}>
  <a className={classes.git} href="https://github.com/ShashankAgrawal003" alt="shashank github" target="_blank" rel="noreferrer">
  <strong>Shashank</strong>
  </a>
  </Typography>

  <br></br>

  <Typography className={classes.root}>
  <a className={classes.git} href="https://github.com/vanshika0307" alt="vanshika github" target="_blank" rel="noreferrer">
  <strong>Vanshika</strong>
  </a>
  </Typography>
  
  <br></br>

  <Typography className={classes.root}>
  <a className={classes.git} href="https://github.com/shalinikumari50" alt="shalini github" target="_blank" rel="noreferrer">
  <strong>Shalini</strong>
  </a>
  </Typography>

  <br></br>

<Typography className={classes.root}>
<a className={classes.git} href="https://github.com/Ritik-code" alt="ritik github" target="_blank" rel="noreferrer" >
  <strong>Ritik</strong>
  </a> 
</Typography>

  <br></br>

  <Typography className={classes.root}>
  <a className={classes.git} href="https://github.com/ADDY-AK" alt="adarsh github" target="_blank" rel="noreferrer">
  <strong>Adarsh</strong>
  </a>
  </Typography>
    </AppBar>

    <Typography className={classes.copyright} align="center" noWrap>
  <strong display="block">© Anonymous, Inc. All rights reserved.2021</strong>
  </Typography>
    </div>
  );
};

export default Footer;
