import { Card, CardHeader, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CommentList = ({ body, author, votes }) => {
  return (
    <main className="comment-card">
      <Card sx={{ minWidth: 150, maxWidth: 600 }}>
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
            <FavoriteIcon sx={{ color: "#35344c" }} />
          </Badge>
        </section>
      </Card>
    </main>
  );
};

export default CommentList;
