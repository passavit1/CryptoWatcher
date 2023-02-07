import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
  margin-top: 5px;
`;

function TABS() {
  const [key, setKey] = useState("home");

  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        Test Tab 1
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Test Tab 2
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Test Tab 3
      </Tab>
    </StyledTabs>
  );
}

export default TABS;
