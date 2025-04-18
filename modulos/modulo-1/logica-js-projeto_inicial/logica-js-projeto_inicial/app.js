
//alert("Hello World"); // primeiro comando

alert("Seja bem vindo ao Jogo número secreto");
let numeroSecreto = parseInt(Math.random()*10 + 1);
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
                    // para sair do loop
                    break;
                
                } else{
                alert("Você errou!");//se não for verdadeiro,irá mostra a mensgem da condição se não/else.
                }if(chute > numeroSecreto){
                alert(`O número secreto é menor que o chute ${chute}`);
            }else{
                alert (`o número secreto é maior que o chute  ${chute}`);
        }
        tentativas++;
    }
    let palavraTentativa = tentativas == 1 ? ' tentativa': ' tentativas';
    alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`);

   // if(tentativas == 1){
   //     alert(`O número secreto era ${numeroSecreto} e você acertou com apenas uma ${tentativas} tentativa`);
   // }else{
   //     alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} tentativas`);
   // }
