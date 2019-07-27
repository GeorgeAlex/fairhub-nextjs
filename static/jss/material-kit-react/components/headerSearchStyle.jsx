const headerSearchStyle = {
    cardTitle: {
        float: "left",
        padding: "10px 10px 10px 0px",
        lineHeight: "24px"
    },
    cardTitleRTL: {
        float: "right",
        padding: "10px 0px 10px 10px !important"
    },
    searchCard: {
        borderRadius: "0px",
        backgroundColor: "transparent",
        marginTop: "-100px"
    },
    searchCardHeader: {
        backgroundColor: "transparent",
        margin: "0px",
        padding: "0px",
        borderRadius: "0px",
    },
    searchCardBody: {
        borderRadius: "0px",
        backgroundColor: "#fff"
    },
    displayNone: {
        display: "none !important"
    },
    tabsRoot: {
        minHeight: "unset !important"
    },
    tabRootButton: {
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        padding: "10px 15px",
        borderRadius: "0px",
        lineHeight: "24px",
        border: "0 !important",
        color: "#fff",
        marginLeft: "0px",
        backgroundColor: "rgb(19, 77, 115)",
        opacity: "1",
        "&:last-child": {
            marginLeft: "0px"
        }
    },
    tabLabelContainer: {
        padding: "0px"
    },
    tabLabel: {
        fontWeight: "500",
        fontSize: "12px"
    },
    tabSelected: {
        backgroundColor: "#fff",
        transition: "0.2s background-color 0.1s",
        color: "#000"
    },
    tabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        "& > svg": {
            verticalAlign: "middle",
            margin: "-1px 5px 0 0"
        }
    },
    tabContainerList: {
        display: "flex",
        flexDirection: "row"
    },
    datePicker: {
        width: "33%"
    }
};

export default headerSearchStyle;