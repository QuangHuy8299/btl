import React, { useEffect } from 'react';
import './default.scss';

import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';
import { useDispatch } from 'react-redux';
// hoc

import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth';

// components
import AdminToolbar from './components/AdminToolBar';

// pages
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';

// layouts
import AdminLayout from './layouts/AdminLayouts';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import DashBoardLayout from './layouts/DashBoardLayout';

const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
        <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
        <Route path="/login"
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
            <DashBoardLayout>
              <Dashboard />
            </DashBoardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>

        )} />
      </Switch>
    </div>
  );
}


export default App;
