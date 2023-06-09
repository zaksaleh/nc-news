const UserCard = ({ username, loginUser, avatar }) => {
  const handleClick = () => {
    loginUser(username);
  };

  return (
    <main>
      <li className="List-card">
        <section onClick={handleClick}>
          <h2>{username}</h2>
          <img
            className="User-avatar-card"
            src={avatar}
            alt="avatar_image"
            width="300"
            height="auto"
          />
        </section>
      </li>
    </main>
  );
};

export default UserCard;
