import { useEffect, useState } from "react";
import { Tab, Tabs, Dropdown } from "react-bootstrap";
import {
  SearchDropDown,
  SLIDER,
  BlockButton,
  DropDownTabs,
} from "../../components/index";
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

  .nav-link.active {
    background-color: #7ec8e3;
    color: #f7082e;

    &:hover {
      color: #f7082e;
    }
  }

  li:hover {
    background-color: #05445e;
    border-radius: 0.375rem;

    button:hover {
      color: white;
    }
  }

  li:last-child {
    display: none;
  }
`;

const StyledInfoDivider = styled(Divider)`
  span {
    color: #e43a27;
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

const StyledContainer = styled.div`
  .ant-typography.ant-dropdown-trigger {
    margin-top: 3%;
    display: inline-block;
    width: 100%;
    height: 2.3rem;
    text-align: center;

    @media screen and (min-width: 351px) {
      display: none;
    }

    .ant-space {
      background-color: #08678e;
      width: 100%;
      height: 100%;
      justify-content: center;
      font-size: 1.5rem;
      color: white;

      div:last-child {
        padding-bottom: 0.5rem;
      }
    }
  }

  ul {
    @media screen and (max-width: 350px) {
      display: none;
    }
  }
`;

function TABS() {
  //handle selected coin

  const [selectedCoin, setSelectedCoin] = useState("");

  const handleCoinSelection = (symbol) => {
    setSelectedCoin(symbol);
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

  return (
    <StyledContainer>
      <DropDownTabs ValueSelectedTab={ValueSelectedTab} />
      <StyledTabs
        id="controlled-tab-example"
        activeKey={SelectdTab}
        onSelect={(k) => setSelectdTab(k)}
        className="mb-3"
        fill
      >
        {/* Calculator */}

        <Tab eventKey="Calculator" title="Calculator">
          <StyledInfoDivider>User Information</StyledInfoDivider>
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
    </StyledContainer>
  );
}

export default TABS;
