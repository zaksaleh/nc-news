const CommentList = ({
  comment_id,
  body,
  article_id,
  author,
  votes,
  created_at,
}) => {
  return (
    <main className="Comment">
      <li className="CommentList">
        <div className="ComContainer">
          <h3 className="item1">{author}</h3>
          <p className="commentBody">{body}</p>
          <p>{votes}</p>
        </div>
      </li>
    </main>
  );
};

export default CommentList;
