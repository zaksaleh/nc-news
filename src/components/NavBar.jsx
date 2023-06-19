import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <div className="navbar">
      <Link to="/Articles" style={{ textDecoration: "none" }}>
        <h3 href="#home" className="navbar-text">
          Home
        </h3>
      </Link>
      <section>
        {!!user.username ? (
          <div className="navbar-user">
            <h3 href="#contact" className="navbar-text">
              {user.username}
            </h3>
            <Avatar
              alt="avatar"
              src={user.avatar_url}
              sx={{ width: 30, height: 30 }}
            />
          </div>
        ) : (
          // <img src={user.avatar_url} alt={user.name} />
          <Link to="/Account" style={{ textDecoration: "none" }}>
            <h3 href="#contact" className="navbar-text">
              Sign In
            </h3>
          </Link>
        )}
      </section>
    </div>
  );
};

export default NavBar;
