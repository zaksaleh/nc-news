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
        <h2>{title}</h2>
        <img className="List-image" src={article_img_url} alt="article-image" />
        <div className="Container">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
        </div>
        <button>READ ME</button>
      </li>
    </main>
  );
};

export default ArticleListCard;
