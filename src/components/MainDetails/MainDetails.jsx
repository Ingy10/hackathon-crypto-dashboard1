import "./MainDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Main() {
  const [cryptos, setCryptos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${id}`
        );
        setCryptos(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      <main className="main">
        <section className="main__section">
          <h1 className="main__title">Cryptocurreny List</h1>
          <ul>
            <li>
              {/* <h3>Symbol</h3>
              <p>{crypto.symbol}</p> */}
              <h3>Market Cap</h3>
              <h3>{crypto.marketCapUsd}</h3>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
