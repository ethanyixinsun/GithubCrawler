import React, { useState, useEffect } from "react";
import { MainLayout } from '../../layouts';
import { RepositoryCardList, SearchBox } from "../../components";
import axios from 'axios';
import { useParams } from "react-router-dom";

export const RepositoryPage = () => {
  const { username } = useParams();
  let [repos, setRepos] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredRepos, setFilteredRepos] = useState(repos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(`/repos/user/${username}`);
        const responseJSON = JSON.parse(response);
        setRepos(responseJSON);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, [username]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const filteredList = repos.filter((repo) => {
      return repo.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredRepos(filteredList);
  }, [repos, searchField]);

  return (
    <MainLayout>
      <h1>Repository of {username}</h1>
      <SearchBox
        placeholder='Search repository name'
        onChangeHandler={onSearchChange}
      />
      <RepositoryCardList repos={filteredRepos} pageLimit={8} />
    </MainLayout>
  );
};
