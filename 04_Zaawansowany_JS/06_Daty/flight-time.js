const departureTime = `2020-10-10T12:30+01:00`;

/**
 * Modify this function to return proper arrival for Larry
 */
function calculateArrival(departure) {
  let arrival = new Date (departure);
  console.log(arrival);
  
  arrival.setHours(arrival.getHours() + 20);
  console.log(arrival);
  
  arrival.setMinutes(arrival.getMinutes() + 40);
  console.log(arrival.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw'}));
  console.log(arrival.toLocaleString('pl-PL', { timeZone: 'Australia/Sydney'}));
  
  
  return arrival.toLocaleString('pl-PL', { timeZone: 'Australia/Sydney'});
}

const arrivalTime = calculateArrival(departureTime);

console.assert(arrivalTime === '11.10.2020, 19:10:00', 'Wrong arrival time: ', arrivalTime);

