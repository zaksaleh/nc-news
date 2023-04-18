import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="App-header">
      <Link to="/articles">
        <h1 className="Header-text">ZEDDIT</h1>
      </Link>
    </div>
  );
};

export default Header;
