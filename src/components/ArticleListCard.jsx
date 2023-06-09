import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  CardActionArea,
  Badge,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ArticleListCard = ({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) => {
  return (
    <main className="mui-card">
      <Card variant="outlined" style={{ width: "100%", height: "90%" }}>
        <section className="card-header">
          <CardHeader
            title={title}
            subheader={`${author} posted on: ${created_at} in ${topic}`}
          />
        </section>
        <CardActionArea>
          <Link to={`/articles/${article_id}`}>
            <CardMedia
              component="img"
              height="194"
              image={article_img_url}
              alt="article-image"
            />
          </Link>
        </CardActionArea>
        <section className="icon">
          <Badge
            badgeContent={votes}
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <FavoriteIcon sx={{ color: "red" }} />
          </Badge>
        </section>
      </Card>
    </main>
  );
};

export default ArticleListCard;
