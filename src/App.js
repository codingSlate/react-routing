import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as MyRouter, Route } from 'react-router-dom';
import './style.css';

const App = () => (
  <MyRouter>
    <div>
      <h1>Hello StackBlitz!</h1>
      <main>
        <Home />
        <About />
      </main>
    </div>
  </MyRouter>
);

export default App;
