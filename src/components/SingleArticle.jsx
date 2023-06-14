import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleCard } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentErr, setCommentErr] = useState(null);

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
      {article.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            {...article}
            setComments={setComments}
            setCommentErr={setCommentErr}
          />
        );
      })}

      <Comments
        comments={comments}
        setComments={setComments}
        commentErr={commentErr}
        setCommentErr={setCommentErr}
      />
    </main>
  );
};

export default SingleArticle;
