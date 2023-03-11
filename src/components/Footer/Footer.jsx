import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 1% 0;
  background-color: #eaecfe;
  margin-top: 2%;

  .containerIcon {
    display: flex;
    justify-content: center;
    gap: 2%;
    margin-bottom: 1%;

    a {
      font-size: 2rem;
      color: #4f46e5;
      text-decoration: none;
    }

    a:hover {
      color: #9f46e5;
    }
  }
`;

const FooterComponent = () => {
  return (
    <StyledFooter>
      <div className="containerIcon">
        <a
          href="https://www.facebook.com/passavit.gunn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookFilled />
        </a>
        <a
          href="https://twitter.com/PassavitP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSquareFilled />
        </a>
        <a
          href="https://www.instagram.com/pgunn_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramFilled />
        </a>
        <a
          href="https://www.linkedin.com/in/passavit-maicharoen-b668421b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled />
        </a>
        <a
          href="https://github.com/passavit1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
      ©2023 Created by Passavit Maicharoen
    </StyledFooter>
  );
};

export default FooterComponent;
