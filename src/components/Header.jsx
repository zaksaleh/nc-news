import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="App-header">
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <h1 className="Header-text">ZEDDIT</h1>
      </Link>

      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search a topic.." name="search" />
          <button className="button" type="submit">
            SEARCH
            {/* <i class="fa fa-search"></i> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
