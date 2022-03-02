import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Report from './Pages/Report'
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/reports/:scale" component={Report} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
