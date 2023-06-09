import { useState, useEffect } from "react";
import { addVotesPatch } from "../api";

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
  const [addVote, setAddVote] = useState(votes);
  const [err, setErr] = useState(null);

  const handleLike = (event) => {
    setAddVote((vote) => vote + 1);
    event.currentTarget.disabled = true;
    setErr(null);
    addVotesPatch(article_id, 1).catch((err) => {
      setAddVote((vote) => vote - 1);
      setErr("No Likey! Please try again");
    });
  };

  const handleDislike = (event) => {
    setAddVote((vote) => vote - 1);
    event.currentTarget.disabled = true;
    setErr(null);
    addVotesPatch(article_id, -1).catch((err) => {
      setAddVote((vote) => vote + 1);
      setErr("No Likey! Please try again");
    });
  };

  return (
    <main>
      <li className="SingleListCard">
        <h2>{title}</h2>

        <img
          className="single-image"
          src={article_img_url}
          alt="article-image"
        />

        <section className="likeContainer">
          {err ? <p>{err}</p> : null}
          <button className="button" onClick={handleLike}>
            LIKE
          </button>
          <button className="button" onClick={handleDislike}>
            DISLIKE
          </button>
        </section>

        <p className="body">{body}</p>
        <div className="Container">
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Votes: {addVote}</p>
          <p>Comments: {comment_count}</p>
        </div>
        <br></br>
      </li>
    </main>
  );
};

export default ArticleCard;
