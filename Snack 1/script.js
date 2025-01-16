// cero un array con piu oggetti
const biciCorsa = [
    {
        'nome': "bici#1",
        'peso': 1,
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

    // creo una variabile con il primo oggetto del array
    let oggettoMinim = biciCorsa[0]; 
  
    // Ciclo per confrontare tutti gli oggetti
    for (let i = 0; i < biciCorsa.length; i++) {

    // Stampa l'oggetto con il numero più piccolo nella pagina
    if (biciCorsa[i].peso < oggettoMinim.peso) {
        oggettoMinim = biciCorsa[i];
        console.log(oggettoMinim);
        pesoMinore.innerHTML = `La ${oggettoMinim.nome} e la bici piu leggera con un peso di ${oggettoMinim.peso} kg`
    }else{
        pesoMinore.innerHTML = `La ${oggettoMinim.nome} e la bici piu leggera con un peso di ${oggettoMinim.peso} kg`
    }
  }
  
  
