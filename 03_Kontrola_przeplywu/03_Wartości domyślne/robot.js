const actionsMap = {
  shout: 'MOVE BACK',
  kick: 'MOVE BACK',
  call: 'MOVE FORWARD',
  waveLeft: 'MOVE LEFT',
  waveRight: 'MOVE RIGHT'
};

const DEFAULT_ACTION = 'TWIST AROUND';

function emitSound() {
  return console.log('BLEEP BLOOP');
}

function robotAction(input, shouldEmitSound) {
  let action = '';
  if(shouldEmitSound === true){
  action = actionsMap[input] && emitSound(); // Wybierz akcję
  }else{
  action =  DEFAULT_ACTION;
  }
  return action;
}
console.log(robotAction('shout', true));
console.log(robotAction('push', false));
console.log(robotAction('call', true));



// console.assert(robotAction('shout', true) === 'MOVE BACK', 'Wrong reaction!');
// console.assert(robotAction('push', true) === 'TWIST AROUND', 'Wrong reaction!');
// console.assert(robotAction('waveLeft', false) === 'MOVE LEFT', 'Wrong reaction!');
// console.assert(robotAction('call', true) === 'MOVE FORWARD', 'Wrong reaction!');
