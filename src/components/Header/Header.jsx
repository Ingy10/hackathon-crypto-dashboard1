import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav-bar">
          <ul className="header__nav-items">
            <li className="header__nav-item--1">
              <Link className="header__nav-item--text" to={`/`}>
                Home
              </Link>
            </li>
            <li className="header__nav-item--2">Wallet</li>
          </ul>
        </nav>
        <h1 className="header__title">Crypto Tracker</h1>
      </header>
    </>
  );
}
export default Header;
