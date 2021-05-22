import React, { useEffect } from 'react';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';
import { useDispatch } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout'
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import WithAuth from './hoc/withAuth'

const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

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
        <Route exact path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />
      </Switch>
    </div>
  );
}


export default App;
