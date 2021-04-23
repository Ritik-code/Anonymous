import React from "react";
import { AppBar, Typography} from "@material-ui/core";
import useStyles from "./styles";
import { Link} from "react-router-dom";
import { display } from '@material-ui/system';

const Footer = () => {
  
  const classes = useStyles();

  

  return (
    <div>
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

    <Typography className={classes.copyright} align="center" variant="h6" component="h5" noWrap>
  <strong display="block">© Anonymous, Inc. All rights reserved.2021</strong>
  </Typography>
    </div>
  );
};

export default Footer;
