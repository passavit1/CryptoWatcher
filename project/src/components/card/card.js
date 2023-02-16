import styled from "styled-components";
import { Dropdown, Card, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getCoinList } from "../../data/index";
import { v4 as uuidv4 } from "uuid";

const StyledCard = styled(Card)`
  width: 100%;
  background: linear-gradient(90deg, #c7daf0 0, #e6effd);
`;

function CardBST({ children, name }) {
  const [SearchValue, setSearchValue] = useState("");
  const [ListOfCoin, setListOfCoin] = useState([]);
  const [FilteredCoin, setFilteredCoin] = useState([]);
  const [SelectedCoin, setSelectedCoin] = useState("");

  // Fetch Data First Time and set To ListOfCoin

  useEffect(() => {
    const fetchCoinList = async () => {
      const list = await getCoinList();
      setListOfCoin(list);
      setFilteredCoin(list);
    };
    fetchCoinList();
  }, []);

  //Handle Value From Search Box

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setFilteredCoin(ListOfCoin);
    } else {
      getCoinList(e.target.value).then((filtered) => {
        setFilteredCoin(filtered);
      });
    }
  };

  //Handle Selected Coin

  const handleSelect = (item) => {
    setSelectedCoin(item.symbol);
  };

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {SelectedCoin ? SelectedCoin.toUpperCase() : name.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <FormControl
                type="text"
                placeholder="Search"
                value={SearchValue}
                onChange={handleSearch}
              ></FormControl>
              {FilteredCoin.map((item) => (
                <Dropdown.Item
                  key={uuidv4()}
                  onClick={() => handleSelect(item)}
                >
                  {item.symbol.toUpperCase()}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default CardBST;
