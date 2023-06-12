import { Card, CardHeader, CardMedia } from "@mui/material";

const UserCard = ({ username, loginUser, avatar }) => {
  const handleClick = () => {
    loginUser(username);
  };

  return (
    <main>
      <section onClick={handleClick}>
        <Card
          sx={{ minWidth: 300, maxWidth: 300, minHeight: 270, maxHeight: 270 }}
        >
          <CardHeader title={username} />
          <CardMedia
            className="user-avatar"
            component="img"
            image={avatar}
            alt="avatar-image"
            height="250"
            sx={{
              marginTop: -5,
              objectFit: "contain",
            }}
          />
        </Card>
      </section>
    </main>
  );
};

export default UserCard;
