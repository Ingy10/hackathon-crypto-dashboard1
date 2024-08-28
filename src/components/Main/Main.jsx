import "./Main.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets");
        setCryptos(response.data.data);
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
          <ul className="main__list">
            {cryptos.map((crypto) => (
              <li className="main__item" key={crypto.id}>
                {" "}
                <Link
                  className="main__item--text"
                  key={crypto.id}
                  to={`cryptos/${crypto.id}`}
                >
                  <strong>
                    {crypto.name}
                    {"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                  </strong>{" "}
                  ${parseFloat(crypto.priceUsd).toFixed(2)}
                </Link>
                <p
                  className="main__item--text"
                  style={{
                    color: crypto.changePercent24Hr < 0 ? "red" : "green",
                  }}
                >
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
