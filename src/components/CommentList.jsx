import { Card, CardHeader, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CommentList = ({ body, author, votes }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ddc2c7",
      },
    },
  });

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
          </ThemeProvider>
        </section>
      </Card>
    </main>
  );
};

export default CommentList;
