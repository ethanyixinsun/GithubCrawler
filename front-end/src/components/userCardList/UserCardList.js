import { UserCard } from "../../components"
import styles from "./UserCardList.module.css";


export const UserCardList = ({ users }) => {
  return (
    <div>
      {
        users.length == 0 ?
          <p className={styles["text-info"]}>Sorry, no user found</p> :
          <div className={styles["card-list"]}>
            {
              users.map((user, i) => {
                return <UserCard user={user} />;
              })
            }
          </div>
      }
    </div>
  );
};