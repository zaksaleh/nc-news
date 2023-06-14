import { useState, useEffect } from "react";
import { addVotesPatch } from "../api";
import AddComment from "./AddComment";
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
  Badge,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const ArticleCard = ({
  article_id,
  title,
  author,
  created_at,
  topic,
  body,
  votes,
  article_img_url,
  comment_count,
  setComments,
  setCommentErr,
}) => {
  const [addVote, setAddVote] = useState(votes);
  const [err, setErr] = useState(null);

  const handleLike = (event) => {
    setAddVote((vote) => vote + 1);
    event.currentTarget.disabled = true;
    setErr(null);
    addVotesPatch(article_id, 1).catch((err) => {
      setAddVote((vote) => vote - 1);
      setErr("No Likey! Please try again");
    });
  };

  const handleDislike = (event) => {
    setAddVote((vote) => vote - 1);
    event.currentTarget.disabled = true;
    setErr(null);
    addVotesPatch(article_id, -1).catch((err) => {
      setAddVote((vote) => vote + 1);
      setErr("No Likey! Please try again");
    });
  };

  return (
    <main className="article-card-container">
      <Card sx={{ minWidth: 150, maxWidth: 750, minHeight: 800 }}>
        <header className="header-container">
          <CardHeader
            height="100"
            titleTypographyProps={{
              variant: "h5",
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
          <Badge
            badgeContent={addVote}
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <FavoriteIcon sx={{ color: "#35344c" }} />
          </Badge>
        </header>

        <CardMedia
          component="img"
          image={article_img_url}
          alt="single-article-image"
          height="400"
          sx={{
            objectFit: "contain",
          }}
        />

        <section>{err ? <h3>{err}</h3> : null}</section>

        <section className="like-dislike-container">
          <IconButton onClick={handleLike}>
            <ThumbUpIcon sx={{ color: "#35344c" }} />
          </IconButton>
          <IconButton onClick={handleDislike}>
            <ThumbDownIcon sx={{ color: "#35344c" }} />
          </IconButton>
        </section>

        <CardContent>
          <Typography paragraph align="left">
            {body}
          </Typography>
        </CardContent>
        <AddComment setComments={setComments} setCommentErr={setCommentErr} />
      </Card>
    </main>
  );
};

export default ArticleCard;
