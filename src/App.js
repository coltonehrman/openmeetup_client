import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import AddCategory from './pages/categories/AddCategory';
import AllCategories from './pages/categories/AllCategories';
import AddGroup from './pages/groups/AddGroup';
import AllGroups from './pages/groups/AllGroups';
import GroupDetails from './pages/groups/GroupDetails';
import Dashboard from './pages/dashboard/Dashboard';
import About from './pages/About';
import Faq from './pages/FAQ';
import Contact from './pages/Contact';
import RecoverPassword from './pages/RecoverPassword';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Error from './pages/Error';

import {
  SessionContextProvider,
  CategoriesContextProvider,
  GroupsContextProvider,
  GlobalErrorContextProvider
} from './contexts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './App.css';

const App = () => {
  return (
    <SessionContextProvider>
      <CategoriesContextProvider>
        <GroupsContextProvider>
          <GlobalErrorContextProvider>
            <Route>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add-category" component={AddCategory} />
                <Route path="/all-categories" component={AllCategories} />
                <Route path="/add-group" component={AddGroup} />
                <Route path="/all-groups" component={AllGroups} />
                <Route path="/groups/:groupId" component={GroupDetails} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={Faq} />
                <Route path="/contact" component={Contact} />
                <Route path="/recover" component={RecoverPassword} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route component={Error} />
              </Switch>
            </Route>
          </GlobalErrorContextProvider>
        </GroupsContextProvider>
      </CategoriesContextProvider>
    </SessionContextProvider>
  );
};

export default App;
