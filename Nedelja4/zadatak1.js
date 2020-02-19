let pokemon1 ={
    ime: 'Boki',
    vrsta: 'vodeni',
    sposobnosti: ['formiranje cunamija', 'brzo Plivanje', 'ronjenje'],
    karakteristike:{ napad:70, odbrana:30, brzina:50}
}
let pokemon2= {
    ime:'Milance',
    vrsta:'vazdusni',
    sposobnosti: ['formiranje tornada', 'letenje'],
    karakteristike:{ napad:40, odbrana:60, brzina:90}
}
let pokemon3 ={
    ime: 'Lion',
    vrsta:'vatreni',
    sposobnosti: ['bljuvanje vatre', 'bacanje vatrenih kugli'],
    karakteristike: { napad:70, odbrana:70, brzina:60}
}
let pokemon4 ={
    ime: 'Unicorn',
    vrsta:'zemljani',
    sposobnosti:['brzo trcanje', 'staticki elektricitet'],
    karakteristike: { napad:90, odbrana:20, brzina:90}
}

let niz=[pokemon1,pokemon2,pokemon3,pokemon4]

// function nizSposobnosti(a){
//     let niz2=[]
//     for (let element of a){
//         niz2.push(element.sposobnosti)
//     }
//     return niz2
// }
// console.log(nizSposobnosti(niz))

// niz.sort((a,b)=> { 
//     return a.karakteristike.brzina-b.karakteristike.brzina;
// });

// console.log(niz)

//4.Направити функцију која прима низ покемона, пореди покемоне по јачини
// и враћа као победника оног који има највећу јачину напада.

// let najjaci=0;
// function pobednik (niz){
//     for(let i=0; i<niz.length; i++){
//         let element=niz[i].karakteristike.napad;
//         if (element.karakteristike.napad > niz[najjaci.karakteristike.napad]){
//             najjaci.karakteristike.napad=element.karakteristike.napad
//         }
//     }
//     return niz[najjaci.karakteristike.napad]
// }
// console.log(niz[najjaci.karakteristike.napad])

//5.zadatak

let btnSviPokemoni=document.querySelector('#prikaz')
let btnNajjaciPokemon=document.querySelector('#pobednik')

btnSviPokemoni.addEventListener('click',(e)=>{
    for(let i=0;i<niz.length;i++){
let lista=document.createElement('div')
let paragraf=document.createElement('p')
paragraf.textContent=niz[i]
lista.appendChild(paragraf)
let slika=document.createElement ('img')
lista.appendChild(slika)

    }
})
// for (let i = 0; i < nizV.length; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent =nizV[i];
//     lista.appendChild(listItem);
// }
