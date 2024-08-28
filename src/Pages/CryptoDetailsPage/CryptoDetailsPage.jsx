import "./CryptoDetailsPage.scss";
import Header from "../../components/Header/Header";
import MainDetails from "../../components/MainDetails/MainDetails";
import Footer from "../../components/Footer/Footer";

function CryptoDetailsPage() {
  return (
    <section className="crypto-details-page">
      <Header />
      <MainDetails />
      <Footer />
    </section>
  );
}

export default CryptoDetailsPage;
