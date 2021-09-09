const prompt = require('prompt-sync')();
console.log("Espero que estejam preparados para perder a amizade\nAqui apostas são permitidas, vocês decidem o que irão apostar!");
console.log();
console.log("Não me responsabilizo pelo resultado, os números serão todos aleatórios\n");
console.log();
console.log("A SORTE ESTÁ LANÇADA")
var listajog = [];
var rodadas= prompt("Quantas rodadas deseja jogar?");
var jogadores= prompt(`Certo, serão ${rodadas} rodadas. Agora me diga quantos jogadores irão participar?`); 


for (let i = 0; i < jogadores;i++){
    let joggers = {}
    joggers.nomejog = prompt(`Certo, agora digite o nome deles `).toUpperCase();
    joggers.random = Math.floor(Math.random() *6)+1;
    listajog.push(joggers);   
}
 
 console.log();

listajog.sort(function(a,b){
    if (a.random > b.random) return -1;
    if (a.random < b.random) return 1;
    return 0
});
 
for (let i1 = 0; i1 < rodadas; i1++){    
 for (let i0 = 0; i0 < listajog.length; i0++){
    numran = Object.values(listajog[i0])
    console.log(`Este é o ${i0+1}º colocado: `);
    for (let c in listajog[0]){
        console.log(`${listajog[i0][c]}`)   
        }
    }
    console.log();
}
