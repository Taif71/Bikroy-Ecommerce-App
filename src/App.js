import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from './Pages/homepage/homepage.component';
import './Pages/homepage/homepage.styles.scss';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const Homepage = () => (
  <div>
    <button >
        Topics 
    </button>
  </div>
);

function App() {
  return (
    // <div className="App">
      
    //   <HomePage />
    // </div>
    <div>
      <Switch>
        <Route  path='/' component={HomePage} />
        <Route  path='/hats' component={HatsPage} />
      </Switch>
        
      
      
    </div>
  );
}

export default App;
