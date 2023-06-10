import ArticleListCard from "./ArticleListCard";
import { fetchArticlesByTopic } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Grid } from "@mui/material";

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
    <main className="article-home">
      <Grid container rowSpacing={4} columnSpacing={4}>
        {topicArticles.map((article) => {
          if (article.topic === topic) {
            return (
              <Grid
                key={article.article_id}
                item
                style={{ display: "flex" }}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
              >
                <ArticleListCard key={article.article_id} {...article} />
              </Grid>
            );
          }
        })}
      </Grid>
    </main>
  );
};

export default Topics;
