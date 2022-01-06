export const convertUnixDate = (unixDate) => {
  const months_arr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(unixDate * 1000); // Convierte la fecha ingresada a milisegundos
  const year = date.getFullYear();
  const month = months_arr[date.getMonth()];
  const day = date.getDate();

  const fullDate = `${month} ${day}, ${year}`;

  return fullDate;
};
