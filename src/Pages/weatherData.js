const data = [
  { state: 'Punjab', temp: 100.1 },
  { state: 'Haryana', temp: 210.19 },
  { state: 'Gujarat', temp: 143.21 },
  { state: 'Andhra Pradesh', temp: 123.25 },
  { state: 'Assam', temp: 111.2 },
];

export const weatherData = (scale) => {
  switch (scale) {
    case 'celcious':
      return data.map((city, temp) => ({
        city,
        temp: (temp - 273.15).toFixed(2),
      }));
    case 'fahrenheit':
      return data.map((city, temp) => ({
        city,
        temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
      }));
    case 'kelvin':
    default:
      return data;
  }
};
