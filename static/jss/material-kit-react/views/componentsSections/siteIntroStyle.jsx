import { container, title } from "../../../material-kit-react.jsx";

const siteIntroStyle = {
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "underline",
    color: "black"
  },
  instructionText: {
    color: "black",
    fontSize: "24px"
  },
  instructionItem: {
    paddingBottom: "20px"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
};

export default siteIntroStyle;