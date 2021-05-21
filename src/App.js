import React from 'react';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import { Switch, Route } from 'react-router-dom';
// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route exact path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
