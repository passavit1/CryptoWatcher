import { useState, useEffect } from "react";
import axios from "axios";

function TestAPI() {
  const [searchValue, setSearchValue] = useState("");
  const [coinList, setCoinList] = useState([]);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchCoinList = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setCoinList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoinList();
  }, []);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = coinList.find((coin) => coin.symbol === searchValue)?.id;
    if (id) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
        )
        .then((response) => {
          const sortedData = response.data.sort(
            (a, b) => a.market_cap_rank - b.market_cap_rank
          );
          const filteredData = sortedData.map((coin) => ({
            symbol: coin.symbol,
            price: coin.current_price,
          }));
          setCoinData(filteredData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search symbol:
          <input type="text" value={searchValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {coinData.map((coin) => (
        <div key={coin.symbol}>
          <span>{coin.symbol}:</span>
          <span>{coin.price}</span>
        </div>
      ))}
    </div>
  );
}

export default TestAPI;
