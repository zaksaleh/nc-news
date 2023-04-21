import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

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
      <br></br>
      <AddComment setComments={setComments} />
      <section>
        {comments.map((comment) => {
          return <CommentList key={comment.comment_id} {...comment} />;
        })}
      </section>
    </main>
  );
};

export default Comments;
