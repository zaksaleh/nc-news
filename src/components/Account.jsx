import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserSelect from "./UserSelect";
import WelcomeUser from "./WelcomeUser";

const Account = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section>
      <UserSelect user={user} setUser={setUser} />
    </section>
  );
};

export default Account;
