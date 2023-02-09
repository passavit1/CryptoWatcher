import { useState } from "react";
import { FormControl, Dropdown, DropdownButton, Form } from "react-bootstrap";

const SearchDropDown = ({ items }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <FormControl
          type="text"
          placeholder="Search"
          className="mb-2"
          value={searchValue}
          onChange={handleSearch}
        />
        {filteredItems.map((item, index) => (
          <Dropdown.Item key={index} href="#/action-1">
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchDropDown;
