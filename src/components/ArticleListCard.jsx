import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  Badge,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ddc2c7",
      },
    },
  });

  return (
    <main className="mui-card">
      <Card style={{ width: "100%", height: "100%" }}>
        <section className="image-link">
          <CardActionArea>
            <Link to={`/articles/${article_id}`}>
              <CardMedia
                component="img"
                image={article_img_url}
                alt="article-image"
              />
            </Link>
          </CardActionArea>
        </section>
        <header className="card-header">
          <CardHeader
            height="150"
            titleTypographyProps={{
              fontSize: "large",
              fontWeight: "bold",
              textAlign: "left",
            }}
            title={title}
            subheaderTypographyProps={{
              variant: "caption",
              textAlign: "left",
              color: "purple",
            }}
            subheader={`${author} posted on: ${created_at} in ${topic}`}
          />
        </header>
        <section className="icon-container">
          <ThemeProvider theme={theme}>
            <Badge
              badgeContent={votes}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <FavoriteIcon sx={{ color: "#35344c" }} />
            </Badge>

            <Badge
              badgeContent={comment_count}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <CommentIcon sx={{ color: "#35344c" }} />
            </Badge>
          </ThemeProvider>
        </section>
      </Card>
    </main>
  );
};

export default ArticleListCard;
