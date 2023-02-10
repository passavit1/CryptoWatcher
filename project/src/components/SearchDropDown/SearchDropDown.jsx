import { useState } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const { Label } = Form;

const StyledDivInline = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCard = styled(Card)`
  width: 30%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    width: 45%;
  }
`;

const StyledLabel = styled(Label)`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  display: block;
  margin-bottom: 10%;
  margin-top: 10%;
`;

const StyledButton = styled(Button)`
  width: 100px;
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
          <div>
            <StyledLabel>COINS</StyledLabel>
            <div>
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
        <StyledCard>
          <StyledLabel>BALANCE</StyledLabel>
          <StyledDivInline>
            <Form.Control
              type="Number"
              placeholder="Number"
              style={{ width: "65%" }}
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
