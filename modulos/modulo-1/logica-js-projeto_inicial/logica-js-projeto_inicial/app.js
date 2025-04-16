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
let faltapontuacao =  pontuacaomax - pontuacao;
let flexoes = prompt("Quantas flexões vc consegue fazer hoje?");
if(flexoes == 5){
    alert(`Sua pontuação é ${pontuacao + 20} e faltam ${faltapontuacao} para 100`)

}else if (flexoes == 10){
    alert(`Sua pontuação é ${pontuacao + 40} e faltam ${faltapontuacao} para 100`)
}else if (flexoes == 15){
    alert( `Sua pontuação é ${pontuacao + 60} e faltam ${faltapontuacao} para 100`)
}else if (flexoes == 20){
    alert(`Sua pontuação é ${pontuacao + 80 - pontuacaomax}`)

}else if(flexoes == 25){
    alert(` Sua pontuação é ${pontuacao + 100}`)

}else {
    alert("Precisa treinar mais para conseguir ganhar  .");
}
// Pergunta: quantas flexões vc consegue fazer hoje ?
// se a quantidade for igual a 5 ,mostre a pontuação 20
// se a quantidade for igual a 10 ,mostre a pontuação 40
// se a quantidade for igual a 15 ,mostre a pontuação 60
// se a quantidade for igual a 20 ,mostre a pontuação 80
// se a quantidade for igual a 25 ,mostre a pontuação 100

//    - Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//    - Caso contrário, mostre "Tente novamente para ganhar.".

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta.
//    - Use uma template string para incluir o valor do saldo na mensagem.

// 5. Peça ao usuário para inserir seu nome usando o prompt.
//    - Em seguida, mostre um alerta de boas-vindas usando o nome inserido pelo usuário.
