import React from "react";
import { RepositoryCard } from "../../components"
import styles from "./RepositoryCardList.module.css";


export const RepositoryCardList = (props) => {
  return (
    <div className={styles["card-list"]}>
      {
        props.repos.map((repo, i) => {
          return <RepositoryCard repo={repo} />;
        })
      }
    </div>

  );
};