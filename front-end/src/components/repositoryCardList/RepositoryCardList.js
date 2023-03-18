import { RepositoryCard } from "../../components"
import styles from "./RepositoryCardList.module.css";


export const RepositoryCardList = ({ repos }) => {
  return (
    <div className={styles["card-list"]}>
      {
        repos.map((repo, i) => {
          return <RepositoryCard repo={repo} />;
        })
      }
    </div>

  );
};