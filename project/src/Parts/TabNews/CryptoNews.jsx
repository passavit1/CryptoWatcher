import { useEffect, useState } from "react";
import axios from "axios";

const CryptoNews = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/news");
      setNewsData(response.data.data);
    };

    fetchNews(); // Fetch data initially

    const interval = setInterval(() => {
      fetchNews(); // Fetch data every 10 minutes
    }, 10 * 60 * 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
      {newsData &&
        newsData.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))}
    </>
  );
};

export default CryptoNews;
