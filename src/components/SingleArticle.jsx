import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleCard } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Comments from "./Comments";
import { Grid } from "@mui/material";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewComments, setViewComments] = useState(false);

  const handleViewComments = (event) => {
    setViewComments((viewComments) => {
      return !viewComments;
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchArticleCard(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, [article_id]);

  return loading ? (
    <Loading />
  ) : (
    <main className="article">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems={"center"}
        justifyContent="center"
        // marginLeft="3%"
        // marginRight="3%"
      >
        {article.map((article) => {
          return (
            <Grid key={article.article_id}>
              <ArticleCard key={article.article_id} {...article} />
            </Grid>
          );
        })}
        {/* <section className="commentButton">
          <button className="button" onClick={handleViewComments}>
            View all comments
          </button>
          {viewComments ? <Comments /> : null}
        </section> */}
      </Grid>
    </main>
  );
};

export default SingleArticle;
