let i=0;
let brojac =0
for (i=1; brojac<100; i++){
switch(i){
    case i%3==0 && i%5==0:
        
        console.log ('FizzBuzz');
        // brojac++;
        break;
    case i%3==0:
    
        console.log ('Fizz');
        // brojac++;
        break;
    case i%5==0:
        console.log ('Buzz');
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