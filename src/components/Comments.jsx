import { useEffect } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import DeleteComment from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Comments = ({ comments, setComments, setCommentErr }) => {
  const { article_id } = useParams();
  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
      setCommentErr(null);
    });
  }, [article_id, setCommentErr, setComments]);

  return (
    <main className="comment-container">
      <section>
        {comments.map((comment) => {
          return (
            <section>
              <CommentList
                key={comment.comment_id}
                {...comment}
                setComments={setComments}
                comments={comments}
              />
              {comment.author === user.username ? (
                <section className="delete-icon">
                  <DeleteComment
                    key={comment.comment_id}
                    deleted_id={comment.comment_id}
                    setFilterComments={setComments}
                  />
                </section>
              ) : null}
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default Comments;
