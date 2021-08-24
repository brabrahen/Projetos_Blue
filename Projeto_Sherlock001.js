///define os prompts, dps nas condicionais ex if (ask 1 === "sim" && ask2 === "sim"...) TESTAR DPS NAO ESQUECE
console.log("###DESAFIO SHERLOCK###");
console.log();
const nome = prompt("Qual é o seu nome: ").toUpperCase();
console.log()
console.log(`${nome}, você está sendo investigado por um assassinato!\nIrei te fazer algumas perguntas e você só poederá responder com SIM e NÃO`);
console.log();
console.log("Digite apenas\n1-SIM E 2-NÃO");
console.log(); 

let pg1 = +prompt(`${nome}, você telefonou para a vitima?\n1-SIM   2-NÃO`);
if (pg1 === 1){
    console.log(`Então você ligou para a vítima ${nome}?! Interessante!`)
} else if (pg1 === 2) {
    console.log(`Certo ${nome}, você alega não ter entrado em contato com a vítima.`)
} else {
    console.log("NÃO ME TENTE!!")
};
console.log();
let pg2 = +prompt(`${nome}, você esteve no local do crime?\n1-SIM   2-NÃO`);
if (pg2 === 1){
    console.log(`Você esteve no local do crime ${nome}, com essa informação sua situação fica um pouco mais complicada!`)
} else if (pg2 === 2) {
    console.log(`Ok ${nome}, vamos prosseguir!`)
} else {
    console.log("NÃO ME TENTE!!")
};
console.log();
let pg3 = +prompt(`Mora perto da vítima ${nome}?\n1-SIM   2-NÃO`);
if (pg3 === 1) {
    console.log(`${nome}, isso te deixa em uma posição delicada!`)
} else if (pg3 === 2){
    console.log(`Tudo bem ${nome}, vamos prosseguir.`)
} else {
    console.log("NÃO ME TENTE!!")
};
console.log();
let pg4 = +prompt(`Devia para a vítma ${nome}? DIGA A VERDADE!\nSIM   NÃO`);
if (pg4 === 1){
    console.log(`Ok ${nome}, próxima pergunta`)
} else if (pg4 === 2){
    console.log(`Não sei se posso confiar em você ${nome}, mas vamos continuar!`)
} else {
    console.log("NÃO APRENDEU AINDA?!")
};
console.log();
let pg5 = +prompt(`E por fim a última pergunta. Já trabalhou com a vítima ${nome}?\n1-SIM   2-NÃO`);
if (pg5 === 1){
    console.log(`Ok ${nome}, aguarde um momento!`)
} else if (pg5 === 2){
    console.log(`Ok ${nome}, aguarde um momento!`)
} else {
    console.log("DESISTO DE VOCÊ!")
};

let murda = pg1+pg2+pg3+pg4+pg5;
let cumplicezada = pg1+pg2+pg3+pg4+pg5;
let suspect = pg1+pg2+pg3+pg4+pg5;
let free = pg1+pg2+pg3+pg4+pg5;
console.log("...");
console.log("...");
console.log();

if (murda === 5){
  console.log(`VOCÊ É CULPADO(A) ${nome} (ノಠ益ಠ)ノ彡┻━┻`)
} else if (cumplicezada === 7){
  console.log(`VOCÊ É UM CÚMPLICE ${nome} (╯°□°)╯︵ ┻━┻`)
} else if (suspect === 8){
  console.log(`VOCÊ É SUPEITO(A) ${nome}!! Me acompanhe até a cela.☜(ಠ_ಠ☜) `)
} else if (murda === 10) {
  console.log(`Você é inocente ${nome}! Pode ir (☞ﾟ∀ﾟ)☞`)
}
