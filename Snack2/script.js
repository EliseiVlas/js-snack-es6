const squadreDiCalcio = [
    {
        'nome squadra': "Juventus",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Atalanta",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Inter",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Milan",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Bologna",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Fiorentina",
        'punti fatti': 0,
        'falli subiti': 0,
    },
    {
        'nome squadra': "Napoli",
        'punti fatti': 0,
        'falli subiti': 0,
    },
]


for(let i = 0; i < squadreDiCalcio.length; i++){
    squadreDiCalcio[i]["punti fatti"] = Math.floor(Math.random() * 40) + 1;
    squadreDiCalcio[i]["falli subiti"] = Math.floor(Math.random() * 20) + 1;
    
}
console.log(squadreDiCalcio);
const elencoSquadre = document.getElementById("calcio")
const falliSubiti = []

for(let i = 0; i < squadreDiCalcio.length; i++){
    falliSubiti.push(squadreDiCalcio[i]["nome squadra"])
    falliSubiti.push(squadreDiCalcio[i]["falli subiti"])

}

elencoSquadre.innerHTML = falliSubiti
console.log(falliSubiti);

