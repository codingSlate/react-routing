import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
const Home = () => {
  return (
    <Section headingText="Welcome to Weather Report">
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
    </Section>
  );
};
export default Home;
