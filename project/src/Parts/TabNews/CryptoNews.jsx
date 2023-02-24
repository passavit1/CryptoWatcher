import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledNews = styled.div`
  position: relative;
  height: auto;
  padding: 1rem 2rem;
  margin-bottom: 0.5rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h4,
  p,
  a {
    color: #fff;
    text-shadow: 2px 2px 5px #000000;
    position: relative;
    z-index: 1;
  }

  h4 {
    background-color: rgba(204, 26, 1, 0.8);
    display: inline-block;
    padding: 0.2rem 0.5rem;
  }

  p {
    margin: 1rem 0;
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    z-index: 1;
  }

  a {
    display: block;
    text-decoration: none;
    margin-top: 1rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
  }
`;

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
          <StyledNews key={index} imageUrl={article.thumb_2x}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </StyledNews>
        ))}
    </>
  );
};

export default CryptoNews;
