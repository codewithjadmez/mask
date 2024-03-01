// function callback(){
//     console.log("callback")
// }

// function action(callback){
//     console.log('action en cours')
//     callback()
// }

// action(callback)\
// function sum(a,b){
//     return a+b
// }

// function multiply(a,b){
//     return a*b
// }


// function operartion(a,b,callback){
//     return callback(a,b)
// }

// console.log(operartion(4,5,sum))


// function traitementAsynchrone(callback){
//     setTimeout(function(){
//         console.log('le traitement asynchrone est temine')
//         callback();
//     },2000)
// }
// traitementAsynchrone(function(){
//     console.log('appele')
// })

// function attendreAleatoire(limite, callback) {
//     let min=0
//     let tempsAttente = Math.random() * (limite - min) + min;
//     console.log(tempsAttente)
//     setTimeout(callback, tempsAttente);
// }

// attendreAleatoire(6000000, () => {
//     console.log("Fonction callback appelée après un délai aléatoire");
// });

function mask(text){
    let characters = text.split('')
    let len = text.length
    let textafter = '' 
    for(let i = 0 ; i<len-4; i++){
        characters[i] = '#'
        textafter= textafter+'#'
    }
    textafter = textafter+characters[len-4]+characters[len-3]+characters[len-2]+characters[len-1]
    console.log(textafter)
}
mask('jaireussihkdjhk')