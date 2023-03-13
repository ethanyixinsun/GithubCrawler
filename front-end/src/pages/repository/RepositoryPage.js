import React, { useState, useEffect } from "react";
import { MainLayout } from '../../layouts';
import { RepositoryCardList } from "../../components"
import styles from "./RepositoryPage.module.css"
import axios from 'axios';
import { useParams } from "react-router-dom";

export const RepositoryPage = () => {
  const { username } = useParams();
  let [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`/repos/user/${username}`);
        const responseJSON = JSON.parse(response)
        setRepos(responseJSON);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <h1 className={styles["h1"]}>Repository of {username}</h1>
      <RepositoryCardList repos={repos} />
    </MainLayout>
  );
}
