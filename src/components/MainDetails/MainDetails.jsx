import "./MainDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MainDetails() {
  const [cryptos, setCryptos] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${id}`
        );
        setCryptos(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <main className="main">
        <section className="main__section">
          <div className="main__crypto-details">
            <h1 className="main__crypto-title">
              {cryptos.name} ({cryptos.symbol}) Details
            </h1>

            <div className="main__crypto-info">
              <p>
                <strong>Rank:</strong> #{cryptos.rank}
              </p>
              <p>
                <strong>Price (USD):</strong> $
                {parseFloat(cryptos.priceUsd).toFixed(2)}
              </p>
              <span className="main__span">
                <p>
                  <strong>24h Change:</strong> {"\u00A0"}
                </p>
                <p
                  style={{
                    color: cryptos.changePercent24Hr < 0 ? "red" : "green",
                  }}
                >
                  {parseFloat(cryptos.changePercent24Hr).toFixed(2)}%
                </p>
              </span>
            </div>

            <div className="market-data">
              <h2>Market Data</h2>
              <p>
                <strong>Market Cap:</strong> $
                {parseFloat(cryptos.marketCapUsd).toLocaleString()}
              </p>
              <p>
                <strong>24h Volume:</strong> $
                {parseFloat(cryptos.volumeUsd24Hr).toLocaleString()}
              </p>
              <p>
                <strong>VWAP (24h):</strong> $
                {parseFloat(cryptos.vwap24Hr).toFixed(2)}
              </p>
            </div>

            <div className="supply-info">
              <h2>Supply Information</h2>
              <p>
                <strong>Circulating Supply:</strong>{" "}
                {parseFloat(cryptos.supply).toLocaleString()} {cryptos.symbol}
              </p>
              <p>
                <strong>Max Supply:</strong>{" "}
                {cryptos.maxSupply
                  ? parseFloat(cryptos.maxSupply).toLocaleString()
                  : "N/A"}{" "}
                {cryptos.symbol}
              </p>
            </div>

            <div className="additional-info">
              <h2>Additional Information</h2>
              <p>
                <strong>Explorer:</strong>{" "}
                <a
                  className="main__additional-info"
                  href={cryptos.explorer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Blockchain Explorer
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default MainDetails;
