import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "#1687a7",
    textDecoration: "none",
  },
  git: {
    textDecoration: "none",
    color: "#9c3d54",
    "&:hover": {
        padding: "10px 30px",
        borderRadius: 15,
        backgroundColor: "#ffaec0",
        transition: "0.4s",
        color:"#b34180"
        
      },

  },
}));
