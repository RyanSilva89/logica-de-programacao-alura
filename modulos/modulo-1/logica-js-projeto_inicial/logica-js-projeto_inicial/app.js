
//alert("Hello World"); // primeiro comando

alert("Seja bem vindo ao Jogo número secreto");
let numeroSecreto = 6;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//ainda não está funcionando como o esperado,mesmo digitando o número secreto errado,ainda a tela de fundo está com a mensagem que a pessoa ganhou o jogo.
//enquanto o número secreto for diferente do chute,irá mostrar a mensagem de que a pessoa errou.
//while -enquanto
//diferente !=
while(chute != numeroSecreto){
        chute = prompt("Chute um número entre 1 e 10 ");
//Condicionais
        if(numeroSecreto == chute){
            alert (`Você acertou ! O número secreto é ${numeroSecreto} com ${tentativas} tentativas`);//se não for verdadeiro não irá mostrar a mesagem,será executando quando esssa condição for verdadeira.
    console.log("Você acertou!");//utilizado para fazer testes
    break;
        }else{
        alert("Você errou!");//se não for verdadeiro,irá mostra a mensgem da condição se não/else.
        }if(chute > numeroSecreto){
        alert(`O número secreto é menor que o chute ${chute}e vc tem ${tentativas } tentativas até o momento`);
    }else{
        alert (`o número secreto é maior que o chute  ${chute} e vc tem ${tentativas } tentativas até o momento`);
}
tentativas++;
}
