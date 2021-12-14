const data = [
  { id: 1, state: 'Punjab', temp: 260.1 },
  { id: 2, state: 'Haryana', temp: 310.19 },
  { id: 3, state: 'Gujarat', temp: 323.21 },
  { id: 4, state: 'Andhra Pradesh', temp: 350.25 },
  { id: 5, state: 'Assam', temp: 310.2 },
];

export const weatherData = (scale) => {
  switch (scale) {
    case 'celcious':
      data.map(({ state, temp }) => ({
        state,
        temp: (temp - 273.15).toFixed(2),
      }));
    case 'fahrenheit':
      return data.map(({ state, temp }) => ({
        state,
        temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
      }));
    case 'kelvin':
    default:
      return data;
  }
};
