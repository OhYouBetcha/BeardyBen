import React from 'react';
import Header from './Components/layout/Header';
import SideMenu from './Components/layout/SideMenu';
import Homepage from './Components/pages/homepage';
import Settings from './Components/pages/settings';
import pageNotFound from './Components/pages/pageNotFound';
import Employees from './Components/pages/employees';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  debugger;
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SideMenu />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/employees" component={Employees} />
          <Route path="/settings" component={Settings} />
          <Route component={pageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
