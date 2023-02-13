import axios from "axios";
import Coinlist from "./Coinlist.json";

async function getCoinList(searchTerm) {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        per_page: 100,
        order: "market_cap_desc",
        vs_currency: "USD",
      },
    }
  );

  const top100Coins = response.data.map(({ id, symbol }) => ({ id, symbol }));

  if (!searchTerm) {
    return top100Coins;
  }

  const filteredCoins = Coinlist.filter((coin) =>
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return [...top100Coins, ...filteredCoins];
}

export default getCoinList;
