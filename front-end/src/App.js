import styles from './App.module.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, RepositoryPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/repository/:username" component={RepositoryPage} />
          <Route render={() => <h1>404 not found... </h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
