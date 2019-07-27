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

import userIntroStyle from "../../../static/jss/material-kit-react/views/componentsSections/userIntroStyle.jsx";

class SectionUserIntro extends React.Component {
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
                    <div className={classes.title}>
                        <h2>For applicants</h2>
                    </div>
                    <div>
                        <p className={classes.instructionText}>
                            Are you looking for interesting and well-paid trade fair jobs in Germany? makes your search much easier than before.
                        </p>
                        <p className={classes.instructionText}>
                            You can create your own profile free of charge by clicking on “want a job” button on the top of the home page and then apply for trade fair and promotion jobs.
                        </p>
                        <p className={classes.instructionText}>
                            There are a few important requirements that are necessary in order to be able to sign up, like foreign language skills (English and german fluent knowledge), hospitality experience and profile photo.
                        </p>
                        <p className={classes.instructionText}>
                            After completing the registration, you will recieve an welcome e-mail with your log in details. Afterwords you can log in any time using your e-mail and password. In your profile you will be able to add details about your person, about experiences on trade fairs, set your hourly rate, and also search and apply for jobs on different trade fairs in Germany. The companies (such as fair exhibitors) will contact you directly to clarify further details. The contract design and billing will be done directly between you and the company. As an applicant, you will also be able to generate invoices from the system so you can save time, as the platform already has this information, it should be easier.
                        </p>
                        <p className={classes.instructionText}>
                            So don't hesitate and sign up now!
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(userIntroStyle)(SectionUserIntro);

