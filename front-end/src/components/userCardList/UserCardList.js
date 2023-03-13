import React from "react";
import { UserCard } from "../../components"
import styles from "./UserCardList.module.css";


export const UserCardList = (props) => {
  return (
    <div className={styles["card-list"]}>
      {
        props.users.map((user, i) => {
          return <UserCard user={user} />;
        })
      }
    </div>

  );
};