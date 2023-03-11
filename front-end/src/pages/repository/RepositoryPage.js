import React, { useState, useEffect } from "react";
import { RepositoryCard } from "../../components"
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
    <div>
      <div>repository page</div>
      {
        repos.map((repo, i) => {
          return (
            <RepositoryCard repo={repo} />
          );
        })
      }
    </div>
  );
}
