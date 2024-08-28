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
          {/* <h1 className="main__title">Cryptocurreny List</h1> */}
          <ul>
            {cryptos.map((crypto) => (
              <li className="main__item" key={crypto.id}>
                {" "}
                <Link
                  className="main__item--text"
                  key={crypto.id}
                  to={`cryptos/${crypto.id}`}
                >
                  {crypto.name} - ${parseFloat(crypto.priceUsd).toFixed(2)}
                  {/* {crypto.symbol} - ${crypto.priceUsd} */}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
