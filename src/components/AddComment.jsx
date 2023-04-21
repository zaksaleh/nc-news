import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const AddComment = ({ err, setErr, setComments }) => {
  const { article_id } = useParams();
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const handlePostComment = (event) => {
    event.preventDefault();
    setButtonDisable(true);
    const newComment = {
      username: username,
      body: body,
      votes: 0,
    };

    setBody([]);
    setUsername("");

    if (body.length === 0) {
      setErr("No Information! Please try again!");
      setButtonDisable(false);
    } else {
      postComment(article_id, newComment)
        .then((addedComment) => {
          setComments((currentComments) => {
            setButtonDisable(false);
            setErr(null);
            return [addedComment, ...currentComments];
          });
        })
        .catch((err) => {
          setErr("No Information! Please try again!");
        });
    }
  };

  return (
    <form onSubmit={handlePostComment}>
      <select
        id="username"
        placeholder="username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      >
        <option value="Username...">Username...</option>
        <option value="grumpy19">grumpy19</option>
        <option value="cooljmessy">cooljmessy</option>
        <option value="tickle122">tickle122</option>
        <option value="weegembump">weegembump</option>
        <option value="happyamy2016">happyamy2016</option>
        <option value="jessjelly">jessjelly</option>
      </select>

      <label>
        <textarea
          className="text-area"
          rows="5"
          cols="50"
          placeholder="Add a comment..."
          name="search"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <button className="button" type="submit" disabled={buttonDisable}>
        POST
      </button>
    </form>
  );
};

export default AddComment;
