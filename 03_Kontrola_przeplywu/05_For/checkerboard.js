
// Przykład funkcji modulo
console.log('Modulo examples: ');
console.log(3 % 2);
console.log(15 % 2);
console.log(10 % 2);

function generateCheckerboard(times, blackTileChar, whiteTileChar) {
    let sign = "";
    for (let i = 0; i < times; i++) {
        sign = sign + '\n'
        for (let j = 0; j < times; j++) {
            if (i % 2 === 1) {
                if (j % 2 === 1) {
                    sign = sign + whiteTileChar;
                } else if (j % 2 === 0) {
                    sign = sign + blackTileChar;
                }
            }else {
                if(j % 2 === 0){
                    sign = sign + blackTileChar
                }else if (j % 2 === 1){
                    sign = sign + whiteTileChar
                }
            }
        }
    }
    console.log(sign);

}

console.log('\n/**************/');
console.log('| CHECKERBOARD |');
console.log('/**************/');

generateCheckerboard(10, '##', '__');
