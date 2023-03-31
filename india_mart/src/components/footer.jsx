import React from "react";
import { Center } from "@chakra-ui/react";

const footerStyle = {
  p: {
    color: "black",
    marginBottom: "1rem",
  },
  div: {
    marginBottom: "1rem",
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <Center>
        <p style={footerStyle.p}>About Us | Customer Care | Desktop Site</p>
      </Center>
      <div style={footerStyle.div}>
        <i
          style={{
            fontSize: "30px",
            color: "#1a73e8",
          }}
          className="fa-brands fa-facebook"
        ></i>
        <i
          style={{
            fontSize: "30px",
            color: "#1d9bf0",
          }}
          className="fa-brands fa-square-twitter"
        ></i>
        <i
          style={{
            fontSize: "30px",
            color: "#0b66c3",
          }}
          className="fa-brands fa-linkedin"
        ></i>
      </div>
    </div>
  );
};

export default Footer;
