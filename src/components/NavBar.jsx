import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  console.log(user);

  return (
    <div className="navbar">
      <Link to="/Articles" style={{ textDecoration: "none" }}>
        <h3 href="#home" className="navbar-text">
          Home
        </h3>
      </Link>

      {!!user.username ? (
        <h3 href="#contact" className="navbar-text">
          {user.username}
        </h3>
      ) : (
        // <img src={user.avatar_url} alt={user.name} />
        <Link to="/Account" style={{ textDecoration: "none" }}>
          <h3 href="#contact" className="navbar-text">
            Sign In
          </h3>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
