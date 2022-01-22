import React, { useState } from 'react';

import HomePage from '../src/pages/homePage';
import { HashRouter } from "react-router-dom";
import './App.css';

const App = () => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <HashRouter base="/">
      <HomePage handleToggle={handleToggle} toggle={toggle}/>
    </HashRouter>
  );
}

export default App;
