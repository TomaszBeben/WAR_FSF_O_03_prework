const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First - create two string variables from sword pattern
  const handle = SWORD_PATTERN.substring(0, 9);
  console.log(handle);
  const tip = SWORD_PATTERN.substring(9, SWORD_PATTERN.length);
  console.log(tip);
  
  
  // Prepare the blade
  const blade = BLADE_CHARACTER.repeat(length);
  // Glue the parts together and return whole sword
  // const sword = `${handle}${blade}${tip}`;
  const sword = handle+ blade+ tip;
  
  
  return sword
}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
