
//alert("Hello World"); // primeiro comando

alert("Seja bem vindo ao Jogo número secreto");
let numeroSecreto = 10;
let chute=prompt("Chute um número entre 1 e 10");
//ainda não está funcionando como o esperado,mesmo digitando o número secreto errado,ainda a tela de fundo está com a mensagem que a pessoa ganhou o jogo.
console.log(numeroSecreto)
//Condicionais
if(numeroSecreto == chute){
    alert ("Você acertou !");//se não for verdadeiro não irá mostrar a mesagem,será executando quando esssa condição for verdadeira.
console.log("Você acertou!");//utilizado para fazer testes
}else{
    alert("Você errou!");//se não for verdadeiro,irá mostra a mensgem da condição se não/else.
}