/*******************************************************************************
 
 Per ognuno dei seguenti esercizi, rispondi a queste domande:
 1- Che cosa fa questo codice?
 2- Sono presenti errori di sintassi?
 3- Sono presenti errori logici?
 
 Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio
 
 *******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1- Incrementa per 5 volte la variabile "i = 0" di una unità e ne restituisce il valore in console.
// 2- Non sono presenti errori di sintassi
// 3- Sì, se "i = 0" non poteva essere maggiore di 5, quindi il ciclo non partiva
/*******************************************************************************/


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(10));

// 1- E' una funzione che riceve una variabile numerica e, se divisa per due da resto zero, allora restituisce il valore della varibile incrementato di 5 unità, altrimenti restituisce la variabile così come l'ha ricevuta.
// 2- Sì a riga 26 non è corretto il simbolo =, ne servono tre per indicare identità --> "==="
// 3- Non sono presenti errori logici
/*******************************************************************************/


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive()

// 1- E' una funzione che esegue un ciclo for e restituisce 5 valori numerici a console.
// 2- Sì a riga 40 non erano corrette le virgole, servivano i punti e virgola.
// 3- Non sono presenti errori logici
/*******************************************************************************/


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());

// 1- Dato un array contente i numeri da 1 a 8, displayEvenNumbers() è una funzione che esegue passa in rassegna tutti e singoli gli elementi contenuti nell'array (grazie al ciclo for) e li inserisce, se pari, dentro l'array vuoto evenNumbers.
// 2- Sì
// 3- Sì
/*******************************************************************************/