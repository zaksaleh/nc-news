import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api";
import Loading from "./Loading";
import UserCard from "./UserCard";

const UserSelect = ({ user, setUser }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const LoginUser = (username) => {
    fetchAllUsers().then((response) => {
      const chosenUser = response.filter((users) => {
        if (users.username === username) return users.username;
      });
      setUser(chosenUser[0]);
    });
  };

  useEffect(() => {
    fetchAllUsers().then((response) => {
      setLoading(true);
      setRegisteredUsers(response);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <main>
      <section className="Welcome-layout">
        <section>
          <h2>PLEASE SELECT A USER</h2>
        </section>
        <li className="mainContainer">
          {registeredUsers.map((user) => {
            return (
              <UserCard
                key={user.username}
                username={user.username}
                avatar={user.avatar_url}
                loginUser={LoginUser}
              />
            );
          })}
        </li>
      </section>
    </main>
  );
};

export default UserSelect;
