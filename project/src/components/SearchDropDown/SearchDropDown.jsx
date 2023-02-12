import { useState } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const { Label } = Form;

const StyledDivInline = styled.div`
  display: flex;
  justify-content: space-around;

  label:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .outer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    .inner {
      width: 100%;

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
  height: 7rem;
`;

const StyledButton = styled(Button)`
  border-radius: 1rem 0 0 1rem;
`;

const StyledDropDownToggle = styled(Dropdown.Toggle)`
  border-radius: 0 1rem 1rem 0;
`;

const SearchDropDown = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <StyledDivInline>
        <StyledCard>
          <div className="outer">
            <Label>COINS</Label>
            <div className="inner">
              <Dropdown>
                <StyledButton variant="danger">
                  {selectedItem || "Select"}
                </StyledButton>
                <StyledDropDownToggle
                  split
                  variant="danger"
                  id="dropdown-basic"
                />
                <Dropdown.Menu>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mb-2"
                    value={searchValue}
                    onChange={handleSearch}
                  />
                  {filteredItems.map((item) => (
                    <Dropdown.Item
                      key={uuidv4()}
                      href="#/action-1"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
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
    </>
  );
};

export default SearchDropDown;
