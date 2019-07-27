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

import companyIntroStyle from "../../../static/jss/material-kit-react/views/componentsSections/companyIntroStyle.jsx";

class SectionCompanyIntro extends React.Component {
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
                        <h2>For Companies</h2>
                    </div>
                    <div>
                        <p className={classes.instructionText}>
                            Are you looking for staff for your next fair in Germany? FairHub is the the easiest and fastest way to hire trade fair staff. On our online platform you can easy post your job offer by just following a few steps.
                        </p>
                        <p className={classes.instructionText}>
                            Here is how the booking process on FairHub looks like:
                        </p>
                        <ol className={classes.instructionText}>
                            <li className={classes.instructionItem}>
                                By clicking the „Post a job“ button (on the top of the home page), you’ll be able to open an employer/company account, from wich you can post a job for any fair you participate on in Germany. Select a trade fair from the list, add the job details and a clear and concise job description. If the applicant needs to have certain experience or skills, you can specify these as job requirements. Requirements can include location, experience, education level and language proficiency.The job details and requirements you provide will help match your job to relevant job seeker searches.
                            </li>
                            <li className={classes.instructionItem}>
                                Finally, you fill in the contact details with the e-mail adress to wich notifications will be send, as soon as somebody aplly on the job offer, so you can react quickliy. You finish your post by clicking the „send request“ button. Briefly, you will recieve an welcome e-mail with your log in details. Afterwords you can log in any time, in order to see your job listing, add/delete jobs and book suitable staff directly online.
                            </li>
                            <li className={classes.instructionItem}>
                                As registered company, you can directly communicate with the applicants and reach an agreement.
                            </li>
                            <li className={classes.instructionItem}>
                                Payment conditions
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    };
};

export default withStyles(companyIntroStyle)(SectionCompanyIntro);

