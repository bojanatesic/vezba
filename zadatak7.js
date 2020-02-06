let redovi=5;
let kolone=5;

let x='';

// x +='*'.repeat(kolone-4) + '\n';
// x +='*'.repeat(kolone-3) + '\n';
// x +='*'.repeat(kolone-2) + '\n';
// x +='*'.repeat(kolone-1) + '\n';
// x +='*'.repeat(kolone) ;
// for(let i = 0; i < redovi ; i++){
    for (kolone=1;kolone<=5;kolone++){
        x +=('#'.repeat(kolone) + '\n').repeat(redovi-4)}

// kolone-='#'}
// kolone++
console.log(x);
//treba da mi odstampa u prvom redu jednu tarabu a u svakom narednom jednu vise
// for (let i=1;i<w/2;i++){
//     let krov = ' '.repeat(w-i-1) + '*' + ' '.repeat(i)+ '*';
//     console.log (krov)}
