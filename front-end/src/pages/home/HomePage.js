import React, { useState, useEffect } from "react";
import { UserCardList } from "../../components"
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
    <div>
      <div>home page</div>
      <UserCardList users={users}/>
    </div>
  )
}


