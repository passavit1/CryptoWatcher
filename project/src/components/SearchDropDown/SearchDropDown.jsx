import { useState } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const { Label } = Form;

const StyledCard = styled(Card)`
  margin-left: 8%;
  width: 30%;
  height: 5rem;
`;

const StyledLabel = styled(Label)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1.1rem;
`;

const StyledButton = styled(Button)`
  width: 100px;
  margin: 0.5rem 0 0 1rem;
  border-radius: 1rem 0 0 1rem;
`;

const StyledDropDownToggle = styled(Dropdown.Toggle)`
  margin-top: 0.5rem;
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
      <StyledCard>
        <StyledLabel>Email address</StyledLabel>
        <Dropdown>
          <StyledButton variant="danger">
            {selectedItem || "Select"}
          </StyledButton>
          <StyledDropDownToggle split variant="danger" id="dropdown-basic" />
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
      </StyledCard>
    </>
  );
};

export default SearchDropDown;
