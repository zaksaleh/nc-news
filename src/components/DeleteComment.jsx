import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteComment } from "../api";

const DeleteComment = ({ deleted_id, setFilterComments }) => {
  const handleDelete = () => {
    setFilterComments((list) => {
      return list.filter((item) => {
        return item.comment_id !== deleted_id;
      });
    });

    deleteComment(deleted_id).catch((err) => {
      console.log(err);
    });
  };

  return (
    <IconButton aria-label="delete" size="small" onClick={handleDelete}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteComment;
