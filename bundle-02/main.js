/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
const myAge = 32;
let message = '';
function checkAge() {

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Sei maggiorenne!';
    }
}
checkAge();
console.log(message);

// 1- E' una funzione che si accerta che l'utente abbia un età uguale o maggiore di 18 anni.
// 2- Non sono presenti errori di sintassi
// 3- Le due variabili myAge e message vanno dichiarate fuori dalla funzione. Inoltre non viene affrontato il caso in cui myAge sia uguale a 18 per cui il messaggio 'hai più di 18 anni!' risulta errato
/*******************************************************************************/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// // 1- è una funzione che mi restituisce il numero di colori presenti all'interno dell'array "colors"
// // 2- lenght è errato: si scrive length
// // 3- Non sono presetni errori di logica
// /*******************************************************************************/


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = parseInt(userNumber)+ 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// // 1- E' una funzione che somma al numero richiesto dall'utente, il numero 12 e stampa a console il risultato
// // 2- Non sono presenti errori di sintassi
// // 3- Sì, concatena una stringa invece che sommare due valori numerici. Va aggiunto il parseInt
// /*******************************************************************************/


// // ESERCIZIO 4
// function checkAccess() {
//     let grantAccess = false;
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');


//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// // 1- E' una funzione che controlla che l'indirizzo mail inserito dall'utente sia contenuto nell'array "addresses". 
// // 2- Sì, i valori booleani vanno senza virgolette
// // 3- No
// /*******************************************************************************/


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (addresses.length < 5) {
            
        if (email === userEmail) {
        grantAccess = true;            
            
      }
        
    }

}
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

// // 1- E' una funzione che controlla che l'indirizzo mail inserito dall'utente sia contenuto nell'array "addresses". 
// // 2- Sì
// // 3- l'ultimo IF va spostato fuori dal ciclo for
// /*******************************************************************************/

