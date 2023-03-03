import { useState, useEffect } from "react";
import axios from "axios";

const NavCoins = ({ NavCoin }) => {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    const SetArray = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: NavCoin,
            vs_currencies: "usd",
            include_24hr_change: true,
          },
        }
      );
      setCoinList([
        ...coinList,
        <div key={coinList.length}>{response.data[NavCoin]?.usd}</div>,
      ]);
      console.log(response.data);
    };
    SetArray();
  }, [NavCoin]);

  console.log(coinList);

  return <>{coinList.map((coin) => coin)}</>;
};

export default NavCoins;
