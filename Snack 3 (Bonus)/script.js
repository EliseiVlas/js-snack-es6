// creo un array
const elementi = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// creo due valori diversi
const primoNumero = 1;
const secondoNumero = 5;

// richiamo la funzione 
const risultato = contenutoInIntervalo(elementi, primoNumero, secondoNumero);
console.log("Nuovo array:", risultato);

// creo una funzione dove se lo user sbaglia a inserire i dati viene bloccato da un errore in console
function contenutoInIntervalo(array, a, b) {
    if(a < 0 || b>= array.length || a > b){
        throw new Error("i numeri inseriti non sono validi");
        
    }
        return array.slice(a,b + 1)
}