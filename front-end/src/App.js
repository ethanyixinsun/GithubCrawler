import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api')
      // .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setData(response.data.content)
        console.log(data)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {data}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
