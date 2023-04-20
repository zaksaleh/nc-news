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
  const [viewComments, setViewComments] = useState(false);

  const handleClick = (event) => {
    setViewComments((viewComments) => {
      return !viewComments;
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchArticleCard(article_id).then((article) => {
      setArticle(article);
      setComments(comments);
      setLoading(false);
    });
  }, [article_id]);

  return loading ? (
    <Loading />
  ) : (
    <main className="Article">
      {article.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}

      <section className="commentButton">
        <button className="button" onClick={handleClick}>
          View all comments
        </button>
        {viewComments ? <Comments comments={comments} /> : null}
      </section>
    </main>
  );
};

export default SingleArticle;
