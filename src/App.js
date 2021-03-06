import React, { useEffect } from 'react';
import './default.scss';
import './container.scss';
import './_hero.scss';

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
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Order from './pages/Order';
import ProductAdmin from './pages/Admin/ProductAdmin';
import CategoriesAdmin from './pages/Admin/CategoriesAdmin';

// layouts
import AdminLayout from './layouts/AdminLayouts';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import DashboardLayout from './layouts/DashBoardLayout';
import AboutUS from './pages/AboutUs';
import Contact from './components/Contact';
import Blog from './components/Blog';
import WishList from './pages/WishList';

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
        />
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
        <Route exact path="/about_us" render={() => (
          <MainLayout>
            <AboutUS />
          </MainLayout>
        )} />
        <Route exact path="/contact" render={() => (
          <MainLayout>
            <Contact />
          </MainLayout>
        )} />
        <Route exact path="/blog" render={() => (
          <MainLayout>
            <Blog />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )} />
        <Route path="/wishList" render={() => (
          <MainLayout>
            <WishList />
          </MainLayout>
        )} />
        <Route path="/payment" render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
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
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route path="/product-admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <ProductAdmin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route path="/categories-admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <CategoriesAdmin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
      </Switch>
    </div>
  );
}

export default App;