import "./CSS/App.css";
import "./CSS/SingleArticle.css";
import "./CSS/Articles.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
