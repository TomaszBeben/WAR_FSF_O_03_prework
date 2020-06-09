const pureNumber = '3.14';
const numberWithString = '3.14SomeStringHere';
const stringWithoutNumber = 'NoNumberHere';
const alreadyNumber = 3.14;

// Poniżej użyj metod z zadania - każdej do przekonwertowania każdej z powyższych stałych.
// Obserwuj różnice w rezultatach

console.log('---PONIŻEJ parseFloat: ---');

console.log(parseFloat(pureNumber));

console.log(parseFloat(numberWithString));

console.log(parseFloat(stringWithoutNumber));

console.log(parseFloat(alreadyNumber));




console.log('---PONIŻEJ parseInt: ---');
console.log(parseInt(pureNumber));

console.log(parseInt(numberWithString));

console.log(parseInt(stringWithoutNumber));

console.log(parseInt(alreadyNumber));


console.log('---PONIŻEJ konstruktor new Number(): ---');
function Number() {
  this.pureNumber = '3.14';
  this.numberWithString = '3.14SomeStringHere';
  this.stringWithoutNumber = 'NoNumberHere';
  this.alreadyNumber = 3.14;
}
const parsed = new Number();
parsed.pureNumber=parseFloat(pureNumber);
console.log(parsed.pureNumber);


console.log('---PONIŻEJ Funkcja');

// Poniżej źle działająca funkcja. Spróbuj naprawić ją tak, żeby działała dla wszystkich numerów
function addToNum(num) {
  if (num === null) {
    throw new Error('Passed variable is not a number!')
  }

  return num + (num * 10);
}

addToNum(0);
addToNum(1);
addToNum(-1);
console.log(addToNum(0));
console.log(addToNum(1));
console.log(addToNum(-1));

