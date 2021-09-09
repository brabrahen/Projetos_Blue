const prompt = require('prompt-sync')();
let roda = +prompt(`Escolha o número de rodadas que iremos jogar!`);

let numPC = Math.floor((Math.random() * 3) + 1);

function jokenpo(num1,num2){
    console.log(`Você escolheu o total de ${roda} rodada(s)`);
    console.log();
    console.log("Se quiser já desistir (ಥ⌣ಥ) tecle 0");
    console.log();
       for (i = 0; i < roda;i++){
             let opc = prompt(`Escolha uma opção entre: Pedra, Papel e Tesoura!\nPedra  Papel  Tesoura`).toUpperCase();
    const pedraH = "PEDRA";
    const papelH = "PAPEL";
    const tesoH = "TESOURA";
    let empate0 = 1 === "PAPEL";
    let empate1 = 2 === "PEDRA";
    let empate2 = 3 === "TESOURA";
    let wH0 = "PEDRA" === 3;
    let wH1 = "PAPEL" === 1;
    let wH2 = "TESOURA" === 2;

    if (opc === pedraH){
        console.log(`Você optou por ${pedraH}`);
    } else if (opc === papelH){
        console.log(`Você optou por ${papelH}`);
    } else if(opc === tesoH){
        console.log(`Você optou por ${tesoH}`);
    } else if (empate0){
      console.log("EMPATAMOS ENTÃO?! VAMOS VER POR QUANTO TEMPO!");
    } else if (empate1){
      console.log("EMPATAMOS ENTÃO?! VAMOS VER POR QUANTO TEMPO!");
    } else if (empate2){
      console.log("EMPATAMOS ENTÃO?! VAMOS VER POR QUANTO TEMPO!");
    } else if (wH0){
      console.log("Isso foi sorte, apenas isso!");
    } else if(wH1){
      console.log("Parece que você não tão inferior assim");
    } else if(wH2){
      console.log("Parabéns humano! Fez o mínimo");
    } else if (opc === 0){
      console.log("Foi uma honra jogar com você!");
     break;
     console.log();
    } 
    console.log();
    let wPC0 = 3 === "PEDRA";
    let wPC1 = 1 === "PAPEL";
    let wPC2 = 2 === "TESOURA";
     if (numPC === 1){
        console.log(`Eu opto por Pedra, espero que seu nome não seja... INDIANA JONES`);
    } else if (numPC === 2){
        console.log(`Eu opto por Papel, nele eu já posso escrever sua DERROTA`);
    } else if (numPC === 3){
        console.log(`Eu opto por Tesoura, para cortar todas as suas chances de VITÓRIA`);
    } else if (wPC0){
      console.log("Sabia que você era fraco, desde o ínicio");
    } else if(wPC1){
      console.log("O que te fez pensar que poderia me vencer?!");
    } else if(wPC2){
      console.log("HAHAHAHAHA, JAMAIS ME ALCANÇARÁ");
    }
    console.log();
    let wwHH0 = wH0++;
    let wwHH1 = wH1++;
    let wwHH2 = wH2++;
    let wwPC0 = wPC0++;
    let wwPC1 = wPC1++;
    let wwPC2 = wPC2++;
    if (wwHH0+wwHH1+wwHH2 > wwPC0+wwPC1+wwPC2){
    console.log("Fui superado por um mero cérebro humano, preciso de uma atualizção!");
    } else if (wwHH0+wwHH1+wwHH2 < wwPC0+wwPC1+wwPC2){
      console.log("Mais fácil que isso, só eu estivesse dormindo...");
    } else if(wwHH0+wwHH1+wwHH2 === wwPC0+wwPC1+wwPC2){
      console.log("Finalmente alguém digno!");
    }
    }

}
  
jokenpo(roda,numPC);