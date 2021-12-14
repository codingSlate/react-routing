import React  from 'react';
import { BrowserRouter as MyRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import './style.css';

const App = () => {
  return (
    <MyRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <main>
        </main>
      </div>
    </MyRouter>
  );
};

export default App;
