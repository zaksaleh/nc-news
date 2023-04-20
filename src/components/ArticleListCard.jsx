import { Link } from "react-router-dom";

const ArticleListCard = ({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) => {
  return (
    <main>
      <li className="List-card">
        <h3 className="cardTitle">{title}</h3>

        <div>
          <Link to={`/articles/${article_id}`}>
            <img
              className="List-image"
              src={article_img_url}
              alt="article-image"
            />

            <div className="overlay"></div>
          </Link>
        </div>

        <div className="Container">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
        </div>
      </li>
    </main>
  );
};

export default ArticleListCard;
