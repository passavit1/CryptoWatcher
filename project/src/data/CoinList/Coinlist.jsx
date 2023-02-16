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

  console.log(top100Coins);
  if (!searchTerm) {
    return top100Coins;
  }

  const filteredCoins = Coinlist.filter((coin) =>
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredCoins);
  const sortedCoins = filteredCoins.sort(
    (a, b) => b.market_cap_rank - a.market_cap_rank
  );

  return sortedCoins;
}

export default getCoinList;
