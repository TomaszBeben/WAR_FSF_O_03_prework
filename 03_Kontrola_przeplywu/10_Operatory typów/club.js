class Person {
  constructor() {
    this.greeting = 'I just want to go to the club...';
  }
}

class PersonaNonGrata extends Person {
  constructor() {
    super();
    this.greeting = 'I should not be in the club...';
  }
}

class PartyGoer extends Person {
  constructor() {
    super();
    this.greeting = 'I visit the club often!'
  }
}

function selector(clubGoers) {
  // Tutaj zaimplementuj swoją logikę
  let allowed = true;
  if (Array.isArray(clubGoers)) {

    clubGoers.forEach(person => {
      if (person.greeting === 'I should not be in the club...') {
        allowed = false;
      }
    })
    return allowed

  }
  else if (clubGoers.greeting === 'I should not be in the club...') {
    allowed = false;
  }
  return allowed;
}


const firstGroup = [
  new PersonaNonGrata(),
  new PartyGoer(),
  new PartyGoer(),
];
console.assert(selector(firstGroup) === false, 'Should not enter the club!');
console.log(selector(firstGroup));



const secondGroup = [
  new PartyGoer(),
  new PartyGoer(),
  new PartyGoer(),
];

console.assert(selector(secondGroup) === true, 'Should enter the club!');
console.log(selector(secondGroup));
const thirdGroup = new PersonaNonGrata();

console.assert(selector(thirdGroup) === false, 'Should not enter the club!');
console.log(selector(thirdGroup));
const fourthGroup = new PartyGoer();

console.assert(selector(fourthGroup) === true, 'Should enter the club!');
console.log(selector(fourthGroup));