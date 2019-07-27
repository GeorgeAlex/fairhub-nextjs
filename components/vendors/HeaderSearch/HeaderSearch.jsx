import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerSearchStyle from "../../../static/jss/material-kit-react/components/headerSearchStyle.jsx";
import Icon from "@material-ui/core/Icon";
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

class HeaderSearch extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const { classes, ...rest } = this.props;
        const tabContent = (
            <List className={classes.tabContainerList}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    buttonText="Role"
                    dropdownHeader="Available roles"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    dropdownList={[
                        "Host/Hostess",
                        "Translator",
                        "Another role"
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <FormControl>
                    <Datetime timeFormat={false}
                              inputProps={{ placeholder: "Pick a date" }}
                    />
                </FormControl>
            </ListItem>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    buttonText="Place"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    dropdownList={[
                        "Munchen",
                        "Berlin",
                        "Koln",
                        "Dortmund"
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/"
                    color="primary"
                    size="small"
                >
                    Search
                </Button>
            </ListItem>
        </List>
        );
        const tabs = [
            {
                tabName: "Find a Job",
                tabContent: tabContent
            },
            {
                tabName: "Find a Candidate",
                tabContent: tabContent
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

export default withStyles(headerSearchStyle)(HeaderSearch);