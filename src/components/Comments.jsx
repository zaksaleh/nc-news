import CommentsList from "./CommentList";
import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <main>
      {comments.map((comment) => {
        return <CommentList key={comment.comment_id} {...comment} />;
      })}
    </main>
  );
};

export default Comments;
