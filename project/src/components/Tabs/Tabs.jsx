import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { SearchDropDown, SLIDER, BlockButton } from "../../components/index";
import { FormInput, FormResult } from "../../Parts/index";
import styled from "styled-components";
import { Divider } from "antd";

const StyledTabs = styled(Tabs)`
  margin-top: 5px;
`;

const StyledDivider = styled(Divider)`
  @media screen and (min-width: 768px) {
    &.ant-divider-horizontal.ant-divider-with-text {
      display: none;
    }
  }
`;

const StyledDivWhenMedium = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin-top: -2%;

    .kQEKDm {
      width: 45%;

      .dzhCPz {
        height: 2.5rem;
      }
    }

    .DivContainer {
      width: 45%;
      margin-top: 5%;

      .WXyGi {
        height: 2.5rem;
      }
    }
  }
`;

function TABS() {
  const [key, setKey] = useState("Calculator");
  const [selectedCoin, setSelectedCoin] = useState("");

  const [inputValues, setInputValues] = useState({
    entryPrice: 0,
    quantity: 0,
    stopPrice: 0,
    takeProfit: 0,
    risk: 0,
    reward: 0,
  });

  const handleCoinSelection = (symbol) => {
    setSelectedCoin(symbol);
  };

  const handleInputChange = (name, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="Calculator" title="Calculator">
        <Divider>User Information</Divider>
        <SearchDropDown onSelect={handleCoinSelection}></SearchDropDown>
        <BlockButton />
        <SLIDER />
        <StyledDivWhenMedium>
          <FormInput
            inputValues={inputValues}
            onInputChange={handleInputChange}
          />
          <StyledDivider className="result-divider">Result</StyledDivider>
          <FormResult symbol={selectedCoin} />
        </StyledDivWhenMedium>
        <Divider></Divider>
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
