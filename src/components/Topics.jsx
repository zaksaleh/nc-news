import ArticleListCard from "./ArticleListCard";
import { fetchArticlesByTopic } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Topics = () => {
  const { topic } = useParams();
  const [topicArticles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticlesByTopic(topic).then((articles) => {
      setTopicArticles(articles);
      setLoading(false);
    });
  }, [topic]);

  return loading ? (
    <Loading />
  ) : (
    <main>
      <li className="mainContainer">
        {topicArticles.map((article) => {
          if (article.topic === topic) {
            return <ArticleListCard key={article.article_id} {...article} />;
          }
        })}
      </li>
    </main>
  );
};

export default Topics;
