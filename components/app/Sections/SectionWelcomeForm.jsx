import React from "react";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import Card from "../../vendors/Card/Card.jsx";
import CardBody from "../../vendors/Card/CardBody.jsx";
import CardHeader from "../../vendors/Card/CardHeader.jsx";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

import welcomFormStyle from "../../../static/jss/material-kit-react/views/componentsSections/welcomeFormStyle.jsx";

class SectionWelcomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    //this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange = (event, value) => {
      this.setState({value});
  };

  render() {
    const { classes } = this.props;
    const tabContentCompany = (
      <FormControl fullWidth="true">
        <FormLabel className={classes.formLabel}>Question 1</FormLabel>
        <Input className={classes.formInput} />
        <FormLabel className={classes.formLabel}>Question 2</FormLabel>
        <Input className={classes.formInput} />
        <FormLabel className={classes.formLabel}>Question 3</FormLabel>
        <Input className={classes.formInput} />
        <FormLabel className={classes.formLabel}>Email address</FormLabel>
        <Input className={classes.formInput} />
        <Button variant="contained" className={classes.submitButton}>
          Submit
        </Button>
      </FormControl>
    );

    const tabContentWorker = (
      <FormControl fullWidth="true">
        <FormLabel className={classes.formLabel}>Question 1</FormLabel>
        <Input className={classes.formInput} />
        <FormLabel className={classes.formLabel}>Question 2</FormLabel>
        <Input className={classes.formInput} />
        <FormLabel className={classes.formLabel}>Email address</FormLabel>
        <Input className={classes.formInput} />
        <Button variant="contained" className={classes.submitButton}>
          Submit
        </Button>
      </FormControl>
    );
    const tabs = [
        {
            tabName: "Company",
            tabContent: tabContentCompany
        },
        {
            tabName: "Worker",
            tabContent: tabContentWorker
        }
    ];
    return (
        <Card className={classes.searchCard}>
            <CardHeader className={classes.searchCardHeader} plain={true}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.displayNone
                    }}
                >
                    {tabs.map((prop, key) => {
                        return (
                            <Tab
                                classes={{
                                    root: classes.tabRootButton,
                                    labelContainer: classes.tabLabelContainer,
                                    label: classes.tabLabel,
                                    selected: classes.tabSelected,
                                    wrapper: classes.tabWrapper
                                }}
                                key={key}
                                label={prop.tabName}
                            />
                        );
                    })}
                </Tabs>
            </CardHeader>
            <CardBody className={classes.searchCardBody}>
                {tabs.map((prop, key) => {
                    if (key === this.state.value) {
                        return <div key={key}>{prop.tabContent}</div>;
                    }
                    return null;
                })}
            </CardBody>
        </Card>
    );
  }
}

export default withStyles(welcomFormStyle)(SectionWelcomeForm);
