import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAllCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
      );
      console.log(data.slice(0, 20));
      setCoins(data);
    };
    fetchAllCoins();
  }, []);

  return (
    <div className="coins">
      <div className="coin-container">
        {coins.slice(0, 40).map((coin) => {
          return (
            <div className="coin-card" key={coin.id}>
              <img src={coin.image} alt={coin.name} />
              <h3>{coin.symbol}</h3>
              <h4>{coin.name}</h4>
              <p>₹{coin.current_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
