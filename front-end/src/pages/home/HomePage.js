import React, { useState, useEffect } from "react";
import { MainLayout } from '../../layouts';
import { UserCardList, SearchBox } from "../../components";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('/users');
        const responseJSON = JSON.parse(response)
        setUsers(responseJSON);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const filteredList = users.filter((user) => {
      return user.username.toLocaleLowerCase().includes(searchField);
    });

    setFilteredUsers(filteredList);
  }, [users, searchField]);

  return (
    <MainLayout>
      <h1>GitHub Users</h1>
      <SearchBox
        placeholder='Search username'
        onChangeHandler={onSearchChange}
      />
      {loading && <Spinner className={styles["loading-spinner"]} animation="border" />}
      {!loading && <UserCardList users={filteredUsers} pageLimit={10} />}
    </MainLayout>
  )
};


