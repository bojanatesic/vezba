function vezba (x){
var answer='';
switch (x){
    case 1:
        answer ='Alpha';
        break;
    case 2:
        answer='Beta';
        break;
    case 3:
        answer='Gamma';
        break;
    case 4:
        answer='Delta';
        break;
    default:
        answer='Nije definisano';
}
return answer;
}
console.log (vezba(5));
