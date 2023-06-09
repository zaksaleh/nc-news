import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleTopicSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());
    const topicSearch = formJson.topicChoice;
    setTopic(topicSearch);
    navigate(`/articles/topic/${topicSearch}`);
  };

  return (
    <div className="App-header">
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <h1 className="Header-text">ZEDDIT</h1>
      </Link>

      <div className="search-container">
        <form onSubmit={handleTopicSubmit}>
          <label htmlFor="topicChoice">
            <select name="topicChoice">
              <option value="cooking">Cooking</option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
            </select>
          </label>
          <button className="button" type="submit">
            PICK A TOPIC
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
