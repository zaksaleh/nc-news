import ArticleListCard from "./ArticleListCard";
import { fetchArticles } from "../api";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div className="Articles">
      <ul>
        <li>
          {articles.map((article) => {
            return <ArticleListCard key={article.article_id} {...article} />;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Articles;
