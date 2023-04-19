import ArticleListCard from "./ArticleListCard";
import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";

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
    <Loading />
  ) : (
    <main>
      <div className="grid_item_1">
        <li>
          {articles.map((article) => {
            return <ArticleListCard key={article.article_id} {...article} />;
          })}
        </li>
      </div>
    </main>
  );
};

export default Articles;
