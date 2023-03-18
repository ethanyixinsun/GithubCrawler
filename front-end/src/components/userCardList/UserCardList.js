import { UserCard } from "../../components"
import styles from "./UserCardList.module.css";


export const UserCardList = ({ users }) => {
  return (
    <div className={styles["card-list"]}>
      {
        users.map((user, i) => {
          return <UserCard user={user} />;
        })
      }
    </div>

  );
};