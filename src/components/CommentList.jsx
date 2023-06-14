import { Card, CardHeader, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { textAlign } from "@mui/system";

const CommentList = ({ body, author, votes }) => {
  return (
    <main className="comment-card">
      <Card>
        <CardHeader
          title={body}
          titleTypographyProps={{
            variant: "h6",
            textAlign: "left",
          }}
          subheader={author}
          subheaderTypographyProps={{
            variant: "caption",
            textAlign: "left",
            color: "purple",
          }}
        />
        <section className="comment-votes">
          <Badge
            badgeContent={votes}
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <FavoriteIcon sx={{ color: "#bb2e2e" }} />
          </Badge>
        </section>
      </Card>
    </main>
    // <main className="Comment">
    //   <li className="CommentList">
    //     <div className="ComContainer">
    //       <h3 className="item1">{author}</h3>
    //       <p className="commentBody">{body}</p>
    //       <p>{votes}</p>
    //     </div>
    //   </li>
    // </main>
  );
};

export default CommentList;
