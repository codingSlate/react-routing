import React, { Fragment } from 'react';
import { weatherData } from './weatherData';
const Report = ({ match }) => {
  const { scale } = match.params;
  const data = weatherData(scale);
  return (
    <section>
      <h1>
        Your weather report in {scale.charAt(0).toUpperCase() + scale.slice(1)}
      </h1>
      {data.map((datapoint) => (
        <Fragment>
          <div key={datapoint.state} className="row">
            <div>{datapoint.state} </div>
            <span>{datapoint.temp.toString()}</span>
          </div>
        </Fragment>
      ))}
    </section>
  );
};
export default Report;
