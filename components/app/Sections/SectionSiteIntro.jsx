import React from "react";
// react plugin that creates slider
import Nouislider from "react-nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Icon from "@material-ui/core/Icon";
// core components
import GridContainer from "../../vendors/Grid/GridContainer.jsx";
import GridItem from "../../vendors/Grid/GridItem.jsx";
import Button from "../../vendors/CustomButtons/Button.jsx";
import CustomInput from "../../vendors/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "../../vendors/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "../../vendors/Pagination/Pagination.jsx";
import Badge from "../../vendors/Badge/Badge.jsx";

import siteIntroStyle from "../../../static/jss/material-kit-react/views/componentsSections/siteIntroStyle.jsx";

class SectionSiteIntro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      //this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div>
                        <p className={classes.instructionText}>
                            Are you looking for staff for your next fair in Germany? Or are you a person interested in working at a fair in Germany?
                        </p>
                        <p className={classes.instructionText}>
                            You are in the right place. FairHub is the the easiest and fastest way to hire trade fair staff. On our online platform you can easy post your job offer by just following a few steps.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(siteIntroStyle)(SectionSiteIntro);

