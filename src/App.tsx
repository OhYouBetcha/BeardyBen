import React from 'react';
import Header from './Components/layout/Header';
import SideMenu from './Components/layout/SideMenu';
import Homepage from './Components/pages/homepage';
import Settings from './Components/pages/settings';
import PageNotFound from './Components/pages/pageNotFound';
import Employees from './Components/pages/employees';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CountApp from './Components/pages/countApp';
import ToDoApp from './Components/pages/todoApp';

const App: React.FC = () => {
  debugger;
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SideMenu />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={() => <Homepage title="Home" />} />
          <Route
            exact
            path="/employees"
            component={() => (
              <Employees employeeId={11111} fName="Hello" title="Employees" />
            )}
          />
          <Route
            exact
            path="/todo"
            component={() => <ToDoApp title="To Do App" />}
          />
          <Route
            path="/settings"
            component={() => <Settings title="Settings" />}
          />
          <Route
            path="/count"
            component={() => <CountApp title="Count App" />}
          />
          <Route component={() => <PageNotFound title="PAGE NOT FOUND" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
