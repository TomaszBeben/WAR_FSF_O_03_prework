/**
 * Mapa akcji poniżej. Przełóż każdą akcję na reakcję, podobnie jak w poprzednim zadaniu:
 * shout: 'MOVE BACK',
 * kick: 'MOVE BACK',
 * call: 'MOVE FORWARD',
 * waveLeft: 'MOVE LEFT',
 * waveRight: 'MOVE RIGHT'
 */

// Akcja domyślna - ma zostać podjęta dla nierozpoznanych bodźców
const DEFAULT_ACTION = 'TWIST AROUND';

function emitSound() {
  return console.log('BLEEP BLOOP');
}

function robotAction(input, shouldEmitSound) {
  // Tu umieść instrukcję if() która zadecyduje o emitowaniu dźwięku
  if (shouldEmitSound) {
    emitSound();
  }
  // Tu umieść swoją instrukcję switch/case
  switch (input) {
    case 'shout': {
      console.log('MOVE BACK');
      break;
    }

    case 'kick': {
      console.log('MOVE BACK');
      break;
    }

    case 'call': {
      console.log('MOVE FORWARD');
      break;
    }

    case 'waveLeft': {
      console.log('MOVE LEFT');
      break;
    }
    case 'waveRight': {
      console.log('MOVE RIGHT');
      break;
      
    }default:console.log(DEFAULT_ACTION);
  }
}
console.log(robotAction('shout', false));
console.log(robotAction('call', true));
console.log(robotAction('push', true));

// Asercje pozostają takie same
// console.assert(robotAction('shout', false) === 'MOVE BACK', 'Wrong action!');
// console.assert(robotAction('push', true) === 'TWIST AROUND', 'Wrong action!');
// console.assert(robotAction('waveLeft', false) === 'MOVE LEFT', 'Wrong action!');
// console.assert(robotAction('call', true) === 'MOVE FORWARD', 'Wrong action!');
