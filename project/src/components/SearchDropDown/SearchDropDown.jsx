import { useState, useEffect } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { getCoinList } from "../../data/index";
import { SnippetsFilled, PlusCircleTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";

const { Label } = Form;

const StyledDivInline = styled.div`
  display: flex;
  justify-content: space-around;

  label:first-child {
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 350px) {
      scale: 0.8;
    }
  }

  .outer {
    .First-Line {
      display: flex;
      align-items: start;

      @media (min-width: 480px) {
        margin-bottom: 3%;
      }

      label {
        width: 100%;
        text-align: center;

        @media (min-width: 397px) {
          scale: 0.7;
        }
        @media (min-width: 480px) {
          scale: 0.8;
        }
        @media (min-width: 576px) {
          scale: 0.9;
        }

        @media (min-width: 760px) {
          padding-top: 1%;
        }
      }

      button {
        display: none;

        @media (min-width: 760px) {
          display: block;
          border: none;
          background-color: transparent;
          font-size: 20px;
          cursor: pointer;
          padding-right: 10%;
        }
        @media (min-width: 1000px) {
          padding-right: 11%;
        }
        @media (min-width: 1000px) {
          padding-right: 13%;
        }
      }
    }

    .inner {
      padding-bottom: 5%;
      display: flex;

      .dropdown {
        width: 100%;
        display: flex;
        justify-content: center;

        z-index: 2;

        button:first-child {
          width: 60%;
        }

        @media (max-width: 299px) {
          scale: 0.8;
          justify-content: flex-start;
        }

        @media (min-width: 300px) {
          scale: 0.8;
          justify-content: flex-start;
        }
        @media (min-width: 480px) {
          scale: 0.9;
          justify-content: flex-start;
        }
        @media (min-width: 576px) {
          scale: 1;
          justify-content: flex-start;
          margin-left: 30px;
        }
        @media (min-width: 650px) {
          scale: 1.1;
          justify-content: flex-start;
          margin-left: 30px;
        }
        @media (min-width: 900px) {
          scale: 1.1;
          justify-content: flex-start;
          margin-left: 80px;
        }
      }

      .ButtonIcon {
        position: absolute;
        right: 0;
        background-color: transparent;
        outline: none;
        border: none;
        z-index: 2;

        @media (min-width: 300px) {
          right: 5px;
          bottom: 18px;
        }
        @media (min-width: 400px) {
          right: 10px;
          bottom: 28px;
          scale: 1.1;
        }
        @media (min-width: 450px) {
          right: 20px;
          bottom: 27px;
          scale: 1.2;
        }
        @media (min-width: 480px) {
          right: 20px;
          bottom: 23px;
          scale: 1.2;
        }
        @media (min-width: 576px) {
          right: 20px;
          bottom: 20px;
          scale: 1.1;
        }
        @media (min-width: 640px) {
          right: 22px;
          bottom: 22px;
          scale: 1.3;
        }
        @media (min-width: 750px) {
          right: 30px;
          bottom: 25px;
          scale: 1.5;
        }
        @media (min-width: 850px) {
          right: 35px;
          bottom: 30px;
          scale: 1.7;
        }
        @media (min-width: 990px) {
          right: 10%;
          bottom: 35px;
          scale: 1.9;
        }
        @media (min-width: 1200px) {
          right: 65px;
          bottom: 40px;
          scale: 1.9;
        }
        @media (min-width: 1300px) {
          right: 13%;
          bottom: 33%;
          scale: 1.9;
        }
        @media (min-width: 1500px) {
          right: 15%;
          bottom: 35%;
          scale: 1.9;
        }
      }
    }
  }

  .Balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding-bottom: 10px;

    .InputBalance {
      width: 65%;

      @media (min-width: 768px) {
        width: 80%;
        margin-right: 1rem;
      }
    }
  }
`;

const StyledCard = styled(Card)`
  width: 45%;
`;

const StyledButton = styled(Button)`
  border-radius: 1rem 0 0 1rem;
`;

const StyledDropDownToggle = styled(Dropdown.Toggle)`
  border-radius: 0 1rem 1rem 0;
`;

const StyledDropdownMenu = styled(Dropdown.Menu)`
  max-height: 250px;
  overflow: scroll;
  padding-top: 0;
`;

const StyledSearchBox = styled(FormControl)`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

const SearchDropDown = ({
  onSelect,
  ValueSelectedTab,
  ClearCoin,
  handleValueBalance,
  getNavCoin,
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [balance, setbalance] = useState("");
  const [coinIdSelected, setCoinIdSelected] = useState("");

  useEffect(() => {
    const fetchCoinList = async () => {
      const list = await getCoinList();
      setCoinList(list);
      setFilteredItems(list);
    };
    fetchCoinList();
  }, []);

  //Clear coin when user selected in Trending

  useEffect(() => {
    if (ClearCoin) setSelectedItem("");
  }, [ClearCoin]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setFilteredItems(coinList);
    } else {
      getCoinList(e.target.value).then((filtered) => {
        setFilteredItems(filtered);
      });
    }
  };

  const handleSelect = (item) => {
    setSelectedItem(item.symbol);
    onSelect({ symbol: item.symbol, id: item.id });
  };

  //Handle value in balance input to set balance
  const handleBalance = (e) => {
    setbalance(e.target.value);
    handleValueBalance(e.target.value);
  };

  return (
    <StyledDivInline>
      <StyledCard>
        <div className="outer">
          <div className="First-Line">
            <Label>COINS SYMBOL</Label>
            <Tooltip title="Add to Watch List">
              <button onClick={() => getNavCoin(coinIdSelected)}>
                <PlusCircleTwoTone />
              </button>
            </Tooltip>
          </div>
          <div className="inner">
            <Dropdown>
              <StyledButton variant="danger">
                {selectedItem.toUpperCase() || "Select"}
              </StyledButton>
              <StyledDropDownToggle
                split
                variant="danger"
                id="dropdown-basic"
              />
              <StyledDropdownMenu>
                <StyledSearchBox
                  type="text"
                  placeholder="Search"
                  className="mb-2"
                  value={searchValue}
                  onChange={handleSearch}
                />
                {filteredItems.map((item) => (
                  <Dropdown.Item
                    key={uuidv4()}
                    onClick={() => {
                      handleSelect(item);
                      setCoinIdSelected(item.id);
                    }}
                  >
                    {item.symbol.toUpperCase()}
                  </Dropdown.Item>
                ))}
              </StyledDropdownMenu>
            </Dropdown>
            <Tooltip title="COIN INFORMATION">
              <button
                onClick={() => ValueSelectedTab("CoinInfo")}
                className="ButtonIcon"
              >
                <SnippetsFilled />
              </button>
            </Tooltip>
          </div>
        </div>
      </StyledCard>
      <StyledCard className="Balance">
        <Label>BALANCE</Label>
        <StyledDivInline>
          <Form.Control
            type="Number"
            placeholder="Number"
            min={0}
            className="InputBalance"
            onChange={handleBalance}
          />
          <Form.Label
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              fontWeight: "bolder",
            }}
          >
            USD
          </Form.Label>
        </StyledDivInline>
      </StyledCard>
    </StyledDivInline>
  );
};

export default SearchDropDown;
