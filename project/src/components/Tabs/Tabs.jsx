import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { SearchDropDown, SLIDER, BlockButton } from "../../components/index";
import {
  FormInput,
  FormResult,
  CoinInfo,
  CryptoNews,
  Trending,
} from "../../Parts/index";
import styled from "styled-components";
import { Divider } from "antd";

const StyledTabs = styled(Tabs)`
  margin-top: 5px;

  li:last-child {
    display: none;
  }
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
  //handle selected coin

  const [selectedCoin, setSelectedCoin] = useState("");

  const handleCoinSelection = (symbol) => {
    // console.log(symbol);
    setSelectedCoin(symbol);
    // console.log(selectedCoin);
  };

  // handle value from Form Input

  const [inputValues, setInputValues] = useState({
    entryPrice: "",
    quantity: "",
    stopPrice: "",
    takeProfit: "",
    risk: "",
    reward: "",
  });

  const handleInputChange = (name, value) => {
    if (value !== 0) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // handle value from slider

  const [LeverageValue, setLeverageValue] = useState(25);

  const handleValueLeverage = (Leverage) => {
    if (Leverage !== 0) {
      setLeverageValue(Leverage);
    }
  };

  //handle Value from SelectType

  const [SelectTypeValue, setSelectTypeValue] = useState("buy");

  const handleValueSelectType = (SelectType) => {
    setSelectTypeValue(SelectType);
  };

  //Call Back Function to handle Page

  const [SelectdTab, setSelectdTab] = useState("Calculator");

  const ValueSelectedTab = (TAB) => {
    setSelectdTab(TAB);
  };

  useEffect(() => {
    if (SelectdTab === "Calculator" && ClearCoin) setClearCoin(false);
  }, [SelectdTab]);

  // Clear Selected Coin in Dropdown

  const [ClearCoin, setClearCoin] = useState(false);

  const SelectedCoinInTrending = (Status) => {
    console.log(Status);
    if (SelectdTab === "Trending" && !Status) setClearCoin(true);
  };

  console.log(ClearCoin);
  return (
    <StyledTabs
      id="controlled-tab-example"
      activeKey={SelectdTab}
      onSelect={(k) => setSelectdTab(k)}
      className="mb-3"
      fill
    >
      {/* Calculator */}

      <Tab eventKey="Calculator" title="Calculator">
        <Divider>User Information</Divider>
        <SearchDropDown
          onSelect={handleCoinSelection}
          ValueSelectedTab={ValueSelectedTab}
          ClearCoin={ClearCoin}
        ></SearchDropDown>
        <BlockButton />
        <SLIDER onChange={handleValueLeverage} />

        <StyledDivWhenMedium>
          <FormInput
            inputValues={inputValues}
            onInputChange={handleInputChange}
            TypeSelect={handleValueSelectType}
          />
          <StyledDivider className="result-divider">Result</StyledDivider>
          <FormResult
            inputValues={inputValues}
            symbol={selectedCoin}
            LeverageValue={LeverageValue}
            SelectTypeValue={SelectTypeValue}
            ClearCoin={ClearCoin}
          />
        </StyledDivWhenMedium>
        <Divider></Divider>
      </Tab>

      {/* Crypto News */}

      <Tab eventKey="CryptoNews" title="Crypto News">
        <CryptoNews />
      </Tab>

      {/* Trending */}

      <Tab eventKey="Trending" title="Trending">
        <Trending
          ValueSelectedTab={ValueSelectedTab}
          handleCoinSelection={handleCoinSelection}
          SelectedCoinInTrending={SelectedCoinInTrending}
        />
      </Tab>

      {/* Coins Info */}

      <Tab eventKey="CoinInfo" title="CoinInfo">
        <CoinInfo selectedCoin={selectedCoin} />
      </Tab>
    </StyledTabs>
  );
}

export default TABS;
