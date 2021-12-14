import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section>
      <h1>Welcome to Weather Report </h1>
      <nav aria-label="main">
        <p>View Weather in </p>
        <ul>
          <li>
            <Link to="/reports/kelvin">Kelvin</Link>
          </li>
          <li>
            <Link to="/reports/celcious">Celcious</Link>
          </li>
          <li>
            <Link to="/reports/fahrenheit">Fahrenheit</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default Home;
