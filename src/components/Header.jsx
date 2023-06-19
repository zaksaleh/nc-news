import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleTopicSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const topicSearch = event.target.value;
    setTopic(topicSearch);

    if (topicSearch === "articles") {
      navigate(`/${topicSearch}`);
    } else {
      navigate(`/articles/topic/${topicSearch}`);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ddc2c7",
      },
      text: {
        primary: "#030101",
      },
      background: {
        main: "#35344c",
      },
    },
  });
  // const handleTopicSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const formJson = Object.fromEntries(formData.entries());
  //   const topicSearch = formJson.topicChoice;
  //   setTopic(topicSearch);
  //   navigate(`/articles/topic/${topicSearch}`);
  // };

  return (
    <main className="App-header">
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <h1 className="Header-text">ZEDDIT</h1>
      </Link>

      <section className="search-container">
        <ThemeProvider theme={theme}>
          <Box sx={{ minWidth: 100, minHeight: 10 }}>
            <FormControl fullWidth size="small" color="primary">
              <InputLabel sx={{ color: "primary.main" }}>Topics</InputLabel>
              <Select
                value={topic}
                label="Topics"
                sx={{
                  bgcolor: "background.main",
                  color: "text.main",
                  fontWeight: "medium",
                }}
                onChange={handleTopicSubmit}
              >
                <MenuItem value="articles">All</MenuItem>
                <MenuItem value="cooking">Cooking</MenuItem>
                <MenuItem value="coding">Coding</MenuItem>
                <MenuItem value="football">Football</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>
      </section>
    </main>

    // <div className="search-container">
    // <form onSubmit={handleTopicSubmit}>
    //   <label htmlFor="topicChoice">
    //     <select name="topicChoice">
    //       <option value="cooking">Cooking</option>
    //       <option value="coding">Coding</option>
    //       <option value="football">Football</option>
    //     </select>
    //   </label>
    //   <button className="button" type="submit">
    //     PICK A TOPIC
    //   </button>
    // </form>
    // </div>
    // </div>
  );
};

export default Header;
