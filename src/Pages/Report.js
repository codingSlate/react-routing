import React from 'react';
import { weatherData } from './weatherData';
const Report = () => {
  const data = weatherData(scale);
  return (
    <section>
      <h1>Your weather report in {
        scale.charAt(0).toUpperCase() + scale.slice(1)}</h1>
    </section>
  );
};
export default Report;
