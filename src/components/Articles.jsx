import ArticleListCard from "./ArticleListCard";
import { fetchArticles } from "../api";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles().then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main className="Articles">
      <li>
        {articles.map((article) => {
          return <ArticleListCard key={article.article_id} {...article} />;
        })}
      </li>
    </main>
  );
};

export default Articles;
