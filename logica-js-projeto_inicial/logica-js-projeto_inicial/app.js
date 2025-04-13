//document.addEventListener('DOMContentLoaded', function() 
//função para formatar o nome

//função inrelevante
function formatarNome(nomeDoUsuario){
    return nomeDoUsuario.charAt(0).toUpperCase() + nomeDoUsuario.slice(1).toLowerCase();
                
}
//verificando se tem somente letras
function  validandoLetras(nomeDoUsuario){
const regex = /^[A-Za-zÀ-ÿ\s]+$/;
return regex.test(nomeDoUsuario);

} 
//função principal do Desafio 1- possivel botão futuramente
function iniciarDesafio1(){
        //Primeira etapa - boas vindas
        alert("Boas vindas ao nosso site!")
        //Segunda etapa nome 
 let nomeDoUsuario = prompt("Digite o seu nome");  
        //verificação do nome
        if(nomeDoUsuario == null || nomeDoUsuario.trim()=== "" || !validandoLetras(nomeDoUsuario)){
            alert("Nome inválido!Digite apenas letras");
            return;
        }
             //exibindo o nome formatado no console
             console.log(formatarNome(nomeDoUsuario));
             //Pedir idade 
let idadeDoUsuario =prompt ("Digite a sua idade ")
//Garantindo que seja um nome válido
if(isNaN(idadeDoUsuario || idadeDoUsuario.trim() === "" )){
    alert("Por favor digite um número válido");
    return;
}
idadeDoUsuario =  Number(idadeDoUsuario);
//verifica se a idade é igual a 18 e se a idade é um número
if(idadeDoUsuario >= 18 ){
    alert("Pode tirar a habilitação!");
}
else{
    alert("Você não pode tirar a habilitação!");
    alert("Volte quando vc tiver 18 anos ")
}

alert("Curiosidade: Irá tirar habilitação de qual tipo de veiculo")
let tipoDeVeiculo= prompt("Digite : 1 carro,2 moto e  3 caminhão");
if(tipoDeVeiculo == 1){
    alert("Você irá tirar a habilitação de carro");

}else if(tipoDeVeiculo == 2){
    alert("Você irá tirar a habilitação de moto");

}else if (tipoDeVeiculo == 3 ){
    alert("Você irá tirar a habilitação de caminhão");
}
//mensagem final
alert("Fim do Desafio");
}


   
// const botaoIniciar = document.getElementById('start-button');




//botaoIniciar.addEventListener('click',iniciarJogo);
//});

//Inicia o Desafio
iniciarDesafio1();