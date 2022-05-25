import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../../styles.module.css";
import { withRouter } from "react-router-dom";
// import { useState } from "react";

const classes = () =>
  makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paddingRight: {
      paddingRight: 10,
    },
  }));

const Header = (props) => {
  const { history } = props;
  //   const [navigationUrl, setNavigationUrl] = useState("/");
  const navigationHandler = (pageUrl) => {
    history.push(pageUrl);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <div className={styles["ml-auto"]}>
            <Button color="inherit" onClick={() => navigationHandler("/")}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigationHandler("/contact")}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              onClick={() => navigationHandler("/expense")}
            >
              Expense
            </Button>
            <Button color="inherit" onClick={() => navigationHandler("/todo")}>
              Todo
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default withRouter(Header);
