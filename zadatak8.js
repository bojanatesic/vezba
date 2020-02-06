let redovi=5;
let kolone=5;
let x='';

for (kolone=1;kolone<=5;kolone++){
        x +=((' '.repeat(kolone)  + '\n').repeat(redovi) + '#')}
        // x+= ' '.repeat(kolone) + '#' + '\n' + ' '.repeat(redovi)+ '#';}


// x +=(' '.repeat(redovi-4)  + '#'+'\n').repeat(kolone)}
console.log(x)
