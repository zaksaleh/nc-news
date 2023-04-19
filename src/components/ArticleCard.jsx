import CommentList from "./CommentList";

const ArticleCard = ({
  article_id,
  title,
  author,
  created_at,
  topic,
  body,
  votes,
  article_img_url,
  comment_count,
}) => {
  return (
    <main>
      <li className="SingleListCard">
        <h2>{title}</h2>

        <img className="List-image" src={article_img_url} alt="article-image" />

        <p className="body">{body}</p>
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

export default ArticleCard;
