// 1. Pergunte ao usuário qual é o dia da semana.
let diaSemana = prompt("Qual é o dia da semana?");
//    - Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
if(diaSemana === "Sábado"  ||  diaSemana === "Domingo"){
    alert("Bom final de semana!");
}else{
    alert("Boa semana!");
}
//    - Caso contrário, mostre "Boa semana!".

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo.
let num = prompt("Digite um número");
if(num >= 0){
    alert("O número é positivo");
}else if (num< 0){
    alert("O número é negativo");

}
//    - Mostre um alerta informando se o número é positivo ou negativo.

// 3. Crie um sistema de pontuação para um jogo.
// variavel pontuação
//tema:saúde condicionamento fisico
let pontuacao = 0;
let pontuacaomax = 100;
let flexoes = prompt("Quantas flexões vc consegue fazer hoje?");
if(flexoes == 5){
    pontuacao += 20;
}else if (flexoes == 10){
    pontuacao += 40;
}else if (flexoes == 15){
    pontuacao += 60;
}else if (flexoes == 20){
   pontuacao +=80

}else if(flexoes == 25){
    pontuacao +=100;
}else {
    alert("treine mais para consegui ganhar!");
}
 let faltapontuacao =  pontuacaomax - pontuacao;
if(pontuacao >0){
    alert(`Sua pontuacao é ${pontuacao} e faltam ${faltapontuacao} para chegar no 100`);
}


// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta.
//    - Use uma template string para incluir o valor do saldo na mensagem.

// 5. Peça ao usuário para inserir seu nome usando o prompt.
//    - Em seguida, mostre um alerta de boas-vindas usando o nome inserido pelo usuário.
