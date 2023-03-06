import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
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
  Top100Coins,
} from "../../Parts/index";
import styled from "styled-components";
import { Divider } from "antd";

// Tabs Color
const StyledTabs = styled(Tabs)`
  margin-top: 5px;
  background-color: white;
  padding: 1%;
  gap: 1%;
  white-space: nowrap;

  li {
    background-color: transparent;
    border-radius: 1rem;
    width: 20%;
    border: transparent;
    outline: transparent;

    &:hover {
      background-color: purple;
      border: transparent;
    }
  }

  .nav-link.active {
    background-color: #f5fcfd;
    background-color: green;
    color: #f7082e;
    border-radius: 1rem;
    border: transparent;

    &:hover {
      color: #f7082e;
      background-color: yellow;
      border-radius: 1rem;
    }
  }

  li:last-child {
    display: none;
  }
`;

// Color Divided User Information
const StyledInfoDivider = styled(Divider)`
  span {
    color: #e43a27;
  }
`;

// Hide Divided Results
const StyledDivider = styled(Divider)`
  @media screen and (min-width: 768px) {
    &.ant-divider-horizontal.ant-divider-with-text {
      display: none;
    }
  }
`;

// input and result area
const StyledDivWhenMedium = styled.div`
  background-color: #f2f2f2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .ant-typography.ant-dropdown-trigger {
      margin-top: 3%;
      display: inline-block;
      width: 90%;
      height: 2.3rem;
      text-align: center;
      margin-bottom: 10px;

      @media screen and (min-width: 430px) {
        display: none;
      }

      .ant-space {
        background-color: #7dd1e3;
        width: 100%;
        height: 100%;
        justify-content: center;
        font-size: 1.5rem;
        color: #d35035;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

        div:last-child {
          padding-bottom: 0.5rem;
        }
      }
    }
  }

  ul {
    @media screen and (max-width: 429px) {
      display: none;
    }
  }
`;

function TABS({ getNavCoin }) {
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

  const [SelectdTab, setSelectdTab] = useState("Top100Coins");

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

  // Clear Input Field

  const [ClearField, setClearField] = useState("");

  //Handle Value in Balance Field

  const [BalanceValue, setBalanceValue] = useState("");

  const handleValueBalance = (Balance) => {
    if (Balance !== 0) {
      setBalanceValue(Balance);
    }
  };

  return (
    <StyledContainer>
      <div>
        <DropDownTabs ValueSelectedTab={ValueSelectedTab} />
      </div>
      <StyledTabs
        id="controlled-tab-example"
        activeKey={SelectdTab}
        onSelect={(k) => setSelectdTab(k)}
        className="mb-3"
        fill
      >
        {/* Top 100 Coins */}

        <Tab eventKey="Top100Coins" title="TOP 100 Coins">
          <Top100Coins getNavCoin={getNavCoin} />
        </Tab>

        {/* Calculator */}

        <Tab eventKey="Calculator" title="Calculator">
          <StyledInfoDivider>User Information</StyledInfoDivider>
          <SearchDropDown
            onSelect={handleCoinSelection}
            ValueSelectedTab={ValueSelectedTab}
            ClearCoin={ClearCoin}
            handleValueBalance={handleValueBalance}
            getNavCoin={getNavCoin}
          ></SearchDropDown>
          <SLIDER onChange={handleValueLeverage} />
          <BlockButton
            OnClickClear={() =>
              setInputValues({
                entryPrice: "",
                quantity: "",
                stopPrice: "",
                takeProfit: "",
                risk: "",
                reward: "",
              })
            }
            ClearingField={() => setClearField("")}
          />

          <StyledDivWhenMedium>
            <FormInput
              inputValues={inputValues}
              onInputChange={handleInputChange}
              TypeSelect={handleValueSelectType}
              ClearField={ClearField}
            />
            <StyledDivider className="result-divider">Result</StyledDivider>
            <FormResult
              inputValues={inputValues}
              symbol={selectedCoin}
              LeverageValue={LeverageValue}
              SelectTypeValue={SelectTypeValue}
              ClearCoin={ClearCoin}
              BalanceValue={BalanceValue}
            />
          </StyledDivWhenMedium>
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
