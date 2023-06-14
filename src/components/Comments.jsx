import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const Comments = ({ comments, setComments, commentErr, setCommentErr }) => {
  const { article_id } = useParams();
  // const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
      setCommentErr(null);
    });
  }, [article_id]);

  return (
    <main className="comment-container">
      <section>{commentErr ? <h3>{commentErr}</h3> : null}</section>
      <section>
        {comments.map((comment) => {
          return <CommentList key={comment.comment_id} {...comment} />;
        })}
      </section>
    </main>
  );
};

export default Comments;
