// Możesz użyć tego obiektu jako bazy do kolejnych ptaków
const birdOne = {
  species: 'sikorak bogatka',
  dominantColor: 'yellow',
  size: 'medium', // small || medium || large
  certainty: 0.55
};
const birdTwo = {
  species: 'wróbel domowy',
  dominantColor: 'grey',
  size: 'small', // small || medium  || large
  certainty: 0.2
};
const birdThree = {
  species: 'dzięcioł duży',
  dominantColor: 'grey',
  size: 'medium', // small || medium  || large
  certainty: 0.6
};
const birdFour = {
  species: 'sokół',
  dominantColor: 'brown',
  size: 'large', // small || medium || large
  certainty: 0.8
};
const date = new Date();
function reportBird(date, certainty) {
  if (!(date instanceof Date)) {
    throw new Error('Passed date is not a proper Date object!');
  }

  if (certainty < 0 || certainty > 1) {
    throw new Error('Recognition certainty has to be between 0 and 1');
  }

  if (!this.species) {
    throw new Error('No context bound for recognition - add a proper bird species context!');
  }

  console.log(
    '[' + date + '] Identified bird: ' + this.species +
    ', dominant color: ' + this.dominantColor +
    ', size: ' + this.size +
    ', recognition certainty: ' + certainty
  )
}
console.log(reportBird.call(birdOne, new Date(), birdOne.certainty ))
console.log(reportBird.apply(birdOne, [new Date(), birdOne.certainty] ))

console.log(reportBird.call(birdTwo, new Date(), birdTwo.certainty ))
console.log(reportBird.apply(birdTwo, [new Date(), birdTwo.certainty] ))

console.log(reportBird.call(birdThree, new Date(), birdThree.certainty ))
console.log(reportBird.apply(birdThree, [new Date(), birdThree.certainty] ))

console.log(reportBird.call(birdFour, new Date(), birdFour.certainty ))
console.log(reportBird.apply(birdFour, [new Date(), birdFour.certainty] ))


