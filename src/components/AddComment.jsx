import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [body, setBody] = useState([]);
  const [username, setUsername] = useState("");

  const handlePostComment = (event) => {
    event.preventDefault();
    const newComment = {
      username: username,
      body: body,
      votes: 0,
    };

    postComment(article_id, newComment).then((addedComment) => {
      setComments((currentComments) => {
        return [addedComment, ...currentComments];
      });
    });
  };

  return (
    <form onSubmit={handlePostComment} action="/action_page.php">
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
        <input
          type="text"
          placeholder="Add a comment..."
          name="search"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <button className="button" type="submit">
        POST
      </button>
    </form>
  );
};

export default AddComment;
