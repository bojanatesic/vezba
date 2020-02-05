//ako je data promenljiva var names, uz pomoc funkcija if/else if ispisati

var names=["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
var par =4;
var strokes =5;

if (strokes==1){
    console.log (names[0])
} else if (strokes <=par-2){
    console.log  (names [1])
} else if (strokes == par-1){
    console.log  (names [2])
} else if (strokes==par){
    console.log  (names [3])
} else if (strokes==par+1){
    console.log  (names [4])
} else if (strokes==par+2){
    console.log  (names [5])
} else if (strokes>=par+3){
    console.log  (names [6])
} 

