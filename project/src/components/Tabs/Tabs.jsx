import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { SearchDropDown, SLIDER, BlockButton } from "../../components/index";
import { FormInput } from "../../Parts/index";
import styled from "styled-components";

const items = ["my", "name", "is", "password", "hello", "world"];

const StyledTabs = styled(Tabs)`
  margin-top: 5px;
`;

function TABS() {
  const [key, setKey] = useState("Calculator");

  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="Calculator" title="Calculator">
        <SearchDropDown items={items}></SearchDropDown>
        <BlockButton />
        <SLIDER />
        <FormInput />
      </Tab>
      <Tab eventKey="NEWS" title="NEWS">
        Test Tab 2
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Test Tab 3
      </Tab>
    </StyledTabs>
  );
}

export default TABS;
