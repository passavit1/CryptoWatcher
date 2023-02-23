import { useState, useEffect } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { getCoinList } from "../../data/index";
import { InfoCircleTwoTone } from "@ant-design/icons";

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
      }

      button {
        position: absolute;
        right: 0;
        scale: 1.2;
        background-color: transparent;
        outline: none;
        border: none;
      }
    }

    .inner {
      padding-bottom: 5%;

      .dropdown {
        width: 100%;
        display: flex;
        justify-content: center;

        button:first-child {
          width: 60%;
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

const SearchDropDown = ({ onSelect, ValueSelectedTab, ClearCoin }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

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

  return (
    <StyledDivInline>
      <StyledCard>
        <div className="outer">
          <div className="First-Line">
            <Label>COINS SYMBOL</Label>
            <button onClick={() => ValueSelectedTab("CoinInfo")}>
              <InfoCircleTwoTone />
            </button>
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
                    onClick={() => handleSelect(item)}
                  >
                    {item.symbol.toUpperCase()}
                  </Dropdown.Item>
                ))}
              </StyledDropdownMenu>
            </Dropdown>
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
