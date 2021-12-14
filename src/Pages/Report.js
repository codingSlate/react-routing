import React, { Fragment } from 'react';
import { weatherData } from './weatherData';
const Report = ({ scale }) => {
  const data = weatherData(scale);
  return (
    <section>
      <h1>
        Your weather report in {scale.charAt(0).toUpperCase() + scale.slice(1)}
      </h1>
      <dl>
        {data.map((datapoint) => (
          <Fragment key={datapoint.id}>
            <dt>{datapoint.state} </dt>
            <dd>{datapoint.temp.toString()}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  );
};
export default Report;
