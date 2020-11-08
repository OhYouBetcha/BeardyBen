import React from 'react';
import Header from './Components/layout/Header';
import SideMenu from './Components/layout/SideMenu';
import Homepage from './Components/pages/homepage';

const App: React.FC = () => {
  debugger;
  return (
    <div>
      <Header />
      <SideMenu />
      <Homepage />
    </div>
  );
};

export default App;
