
// TEST ALTERNANCE MOHAMED SAADI

// Test 1 : Convertir un nombre aléatoire entre 1 et 10 (inclus) en l'équivalent en nombre romain

const romanArray = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'IIX', 'IX', 'X']

function numberConverter(number, array) {
    for (let i = 1; i <= number; i++) {
        if (i == number) {
            let convertedNmbr = array[i - 1]
            console.log(`${number} donne ${convertedNmbr} en nombre romain`)
        }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let randomNmbr = random(1, 10)

numberConverter(randomNmbr, romanArray);


// Test 2 : Déclarer un tableau avec une liste d'information et afficher ses éléments en utilsant une boucle forEach 
// ex: France : Paris

const array = ['France : Paris', 'Allemagne : Berlin', 'Italie : Rome']

array.forEach(element => {
    console.log(element)
});


// Génerer 10 nombres aléatoirement et les mettres dans un tableau (array1), si les nombres sont supérieur ou égal à 50 les mettre dans un tableau (array2)
// sinon les mettre dans un autre tableau (array3)

let array1 = []
let array2 = []
let array3 = []

for (let i = 0; i < 10; i++) {
    let randomNumber = random(1, 100)
    array1.push(randomNumber)
    if (randomNumber < 50) {
        array3.push(randomNumber)
    }
    else array2.push(randomNumber)
}

console.table(array1)
console.table(array2)
console.table(array3)