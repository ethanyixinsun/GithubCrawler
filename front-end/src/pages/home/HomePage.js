import React, { useState, useEffect } from "react";
import { MainLayout } from '../../layouts';
import { UserCardList } from "../../components"
import styles from "./HomePage.module.css"
import axios from 'axios';

export const HomePage = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('/users');
        const responseJSON = JSON.parse(response)
        setUsers(responseJSON);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <h1 className={styles["h1"]}>Github Users</h1>
      <UserCardList users={users}/>
    </MainLayout>
  )
}


