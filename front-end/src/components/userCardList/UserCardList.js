import React, { useState, useEffect } from 'react';
import { UserCard } from '../../components';
import styles from './UserCardList.module.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export const UserCardList = ({ users, pageLimit }) => {
  const [page, setPage] = useState(1);
  const [pagedUsers, setPagedUsers] = useState([]);

  useEffect(() => {
    let pagedList = [];
    for (let i = 0; i < users.length; i += pageLimit) {
      pagedList.push(users.slice(i, i + pageLimit));
    }

    setPagedUsers(pagedList);
    setPage(1);
  }, [users, pageLimit]);

  return (
    <div>
      {
        users.length === 0 ?
          <p className={styles["text-info"]}>Sorry, no user found</p> :
          <div>
            <div className={styles["card-list"]}>
              {
                pagedUsers[page - 1]?.map((user, i) => {
                  return <UserCard user={user} />;
                })
              }
            </div>
            <PaginationControl
              page={page}
              between={4}
              total={users.length}
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