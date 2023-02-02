import React, { useState, useEffect } from "react";
import axios from "axios";

const Price = () => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "usd",
            api_key: "YOUR_API_KEY",
          },
        }
      );
      setPrice(response.data.bitcoin.usd);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>The price of Bitcoin in USD is: {price}</h1>
    </div>
  );
};

export default Price;
