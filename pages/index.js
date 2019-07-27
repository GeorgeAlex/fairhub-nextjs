import React from "react";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import '../static/scss/material-kit-react.scss';

// core components
import Header from "../components/vendors/Header/Header";
import Footer from "../components/vendors/Footer/Footer";
import GridContainer from "../components/vendors/Grid/GridContainer";
import GridItem from "../components/vendors/Grid/GridItem";
import HeaderLinks from "../components/vendors/Header/HeaderLinks";
import Parallax from "../components/vendors/Parallax/Parallax";
import HeaderSearch from "../components/vendors/HeaderSearch/HeaderSearch";

import landingPageStyle from "../static/jss/material-kit-react/views/landingPage.jsx";

//Page sections
import SectionSiteIntro from "../components/app/Sections/SectionSiteIntro";
import SectionWelcomeForm from "../components/app/Sections/SectionWelcomeForm";


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="FairHub"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("../static/img/site-bg.jpeg")}></Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <h1 className={classes.sectionTitle}>About FairHub</h1>
            <SectionSiteIntro />
            <SectionWelcomeForm />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);