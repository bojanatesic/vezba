let i=0;
let brojac =0
for (i=0; brojac<100; i++){
switch(i){
    case 1:
        if(i%3==0 && i%5==0){
        console.log ('FizzBuzz');}
        // brojac++;
        break;

    case 2:
        if (i%3==0){
        console.log ('Fizz');}
        // brojac++;
        break;
    case 3:
        if (i%5==0){
        console.log ('Buzz');}
        // brojac++;
        break;
    default:
        if(i%3!=0 && i%5!=0){
        console.log (i);}
        // brojac++;
        break;
}
brojac++;

}