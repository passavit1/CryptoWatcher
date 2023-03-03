import { getCoinList } from "../../data/index";
import { useState, useEffect } from "react";

const NavCoins = () => {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    const fetchCoinList = async () => {
      const response = await getCoinList();
      setCoinList(response);
    };

    fetchCoinList();
  }, []);

  console.log(coinList);

  return (
    <>
      <div>
        {coinList.map((coin) => (
          <div key={coin.id}>{coin.name}</div>
        ))}
      </div>
    </>
  );
};

export default NavCoins;
