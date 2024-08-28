import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav-bar">
          <ul className="header__nav-items">
            <li className="header__nav-item--1">Home</li>
            <li className="header__nav-item--2">Wallet</li>
          </ul>
        </nav>
        <h1 className="header__title">Crypto Tracker</h1>
      </header>
    </>
  );
}
export default Header;
