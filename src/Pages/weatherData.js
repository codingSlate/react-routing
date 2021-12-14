const data = [
  { id: 1, state: 'Punjab', temp: 100.1 },
  { id: 2, state: 'Haryana', temp: 210.19 },
  { id: 3, state: 'Gujarat', temp: 143.21 },
  { id: 4, state: 'Andhra', temp: 123.25 },
  { id: 5, state: 'Assam', temp: 111.2 },
];

export const weatherData = (scale) => {
  switch (scale) {
    case 'celcious':
      console.log(
        data.map((state, temp) => ({
          state,
          temp: (temp - 273.15).toFixed(2),
        }))
      );
    // case 'fahrenheit':
    //   return data.map((state, temp) => ({
    //     state,
    //     temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
    //   }));
    case 'kelvin':
    default:
      return data;
  }
};
