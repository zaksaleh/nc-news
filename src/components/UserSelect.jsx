import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api";
import Loading from "./Loading";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";

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
      <section>
        <section>
          <h2>PLEASE SELECT A USER</h2>
        </section>
        <section className="user-select">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={3}
            direction="row"
            alignItems={"center"}
            justifyContent="center"
          >
            {registeredUsers.map((user) => {
              return (
                <Grid
                  key={user.username}
                  item
                  style={{ display: "flex" }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <UserCard
                    key={user.username}
                    username={user.username}
                    avatar={user.avatar_url}
                    loginUser={LoginUser}
                  />
                </Grid>
              );
            })}
          </Grid>
        </section>
      </section>
    </main>
  );
};

export default UserSelect;
