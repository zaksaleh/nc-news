import ArticleListCard from "./ArticleListCard";
import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Grid } from "@mui/material";

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
    <main className="article-home">
      <Grid
        container
        rowSpacing={4}
        columnSpacing={4}
        justifyContent={{ display: "flex-start" }}
        alignContent={{ display: "space-between" }}
      >
        {articles.map((article) => {
          return (
            <Grid
              key={article.article_id}
              item
              style={{ display: "flex" }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <ArticleListCard key={article.article_id} {...article} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Articles;
