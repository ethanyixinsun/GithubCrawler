import React, { useState, useEffect } from 'react';
import { RepositoryCard } from "../../components";
import styles from "./RepositoryCardList.module.css";
import { PaginationControl } from 'react-bootstrap-pagination-control';

export const RepositoryCardList = ({ repos, pageLimit }) => {
  const [page, setPage] = useState(1);
  const [pagedRepos, setPagedRepos] = useState([]);

  useEffect(() => {
    let pagedList = [];
    for (let i = 0; i < repos.length; i += pageLimit) {
      pagedList.push(repos.slice(i, i + pageLimit));
    }

    setPagedRepos(pagedList);
    setPage(1);
  }, [repos, pageLimit]);

  return (
    <div>
      {
        repos.length === 0 ?
          <p className={styles["text-info"]}>Sorry, no repository found</p> :
          <div>
            <div className={styles["card-list"]}>
              {
                pagedRepos[page - 1]?.map((repo, i) => {
                  return <RepositoryCard repo={repo} />;
                })
              }
            </div>
            <PaginationControl
              page={page}
              between={4}
              total={repos.length}
              limit={pageLimit}
              changePage={(page) => {
                setPage(page);
              }}
              ellipsis={1}
            />
          </div>
      }
    </div>
  );
};