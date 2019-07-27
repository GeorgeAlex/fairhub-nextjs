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
import SectionCompanyIntro from "../components/app/Sections/SectionCompanyIntro";
import SectionUserIntro from "../components/app/Sections/SectionUserIntro";


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
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("../static/img/site-bg.jpeg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                  <HeaderSearch />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div id="how-it-works" className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <h1 className={classes.sectionTitle}>How it works</h1>
            <SectionCompanyIntro />
            <SectionUserIntro />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);