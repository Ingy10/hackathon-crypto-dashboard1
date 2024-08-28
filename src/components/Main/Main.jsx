import "./Main.scss";
import { useState, useEffect } from "react";

function Main() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((data) => setCryptos(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <main className="main">
        <section className="main__section">
          <h1 className="main__title">Cryptocurreny List</h1>
          <ul>
            {cryptos.map((crypto) => (
              <li key={crypto.id}>
                {crypto.name} - ${parseFloat(crypto.priceUsd).toFixed(2)}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
