import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CryptoDetailsPage from "./Pages/CryptoDetailsPage/CryptoDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cryptos/:id" element={<CryptoDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
