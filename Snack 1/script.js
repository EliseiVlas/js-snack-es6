// cero un array con piu oggetti
const biciCorsa = [
    {
        'nome': "bici#1",
        'peso': 5.5,
    },
    {
        'nome': "bici#2",
        'peso': 5,
    },
    {
        'nome': "bici#3",
        'peso': 10,
    },
    {
        'nome': "bici#4",
        'peso': 9.5,
    },
    {
        'nome': "bici#5",
        'peso': 6.6,
    },
    {
        'nome': "bici#6",
        'peso': 7,
       
    },
    {
        'nome': "bici#7",
        'peso': 8,
        
    },
    {
        'nome': "bici#8",
        'peso': 7.5,
    },
    {
        'nome': "bici#9",
        'peso': 9,

    },

]

// selezioniamo lelemento di output
const pesoMinore = document.getElementById("peso")
const pesoENome = document.getElementById("bici")

// creo un nuovo array dove metto solo i pesi del array
const numeri = []
for(let i = 0; i < biciCorsa.length; i++){
    numeri.push(biciCorsa[i].peso)
}
console.log(numeri);

// tramite math.min trovo il numero piu piccolo del array
const numeroPiuPiccolo = Math.min(...numeri)

pesoMinore.innerHTML = `La bici che pese meno ha: ${numeroPiuPiccolo} kg`

// tramite find trovo il nome della bici piu leggera
const oggettoMinimo = biciCorsa.find(obj => obj.peso === numeroPiuPiccolo)

pesoENome.innerHTML = JSON.stringify(oggettoMinimo)




