import { RepositoryCard } from "../../components"
import styles from "./RepositoryCardList.module.css";


export const RepositoryCardList = ({ repos }) => {
  return (
    <div>
      {
        repos.length === 0 ?
          <p className={styles["text-info"]}>Sorry, no repository found</p> :
          <div className={styles["card-list"]}>
            {
              repos.map((repo, i) => {
                return <RepositoryCard repo={repo} />;
              })
            }
          </div>
      }
    </div>
  );
};