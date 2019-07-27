/*eslint-disable*/
import React from "react";
import Link from 'next/link';
import getConfig from 'next/config';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from '@material-ui/core/Icon';
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../../static/jss/material-kit-react/components/headerLinksStyle.jsx";

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link href="/">
            <Button
                color="transparent"
                className={classes.navLink}
            >
                Home
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="#how-it-works">
            <Button
                color="transparent"
                className={classes.navLink}
            >
                How it works?
            </Button>
          </Link>
        </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/login">
          <Button
            color="transparent"
            className={classes.navLink}
          >
              Log In
          </Button>
        </Link>
      </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/login-company">
            <Button className={classes.registerNavLinkCompany}>
                Post a job
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link href="/jobs">
            <Button
                className={classes.registerNavLinkApplicant}
            >
                Want a job
            </Button>
          </Link>
        </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
