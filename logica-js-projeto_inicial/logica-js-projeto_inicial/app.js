//document.addEventListener('DOMContentLoaded', function() 
//função para formatar o nome
function formatarNome(nomeDoUsuario){
    return nomeDoUsuario.charAt(0).toUpperCase() + nomeDoUsuario.slice(1).toLowerCase();
                
}

//função principal do Desafio 1- possivel botão futuramente
function iniciarDesafio1(){
        //Primeira etapa - boas vindas
        alert("Boas vindas ao nosso site!")
        //Segunda etapa nome 
 let nomeDoUsuario = prompt("Digite o seu nome");  
        //verificação do nome
        if(nomeDoUsuario == null || nomeDoUsuario.trim()=== ""){
            alert("você está encerrando o cadastro")
            return;
        }
             //exibindo o nome formatado no console
             console.log(formatarNome(nomeDoUsuario));
             //Pedir idade 
let idadeDoUsuario =prompt ("Digite a sua idade ")
//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idadeDoUsuario >= 18){
    alert("Pode tirar a habilitação!");
}
    }

    //variaveis Ficticias-Serão usadas na segunda versão
        //Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua"
//Crie uma variável chamada idade e atribua a ela o valor 25.

    let idade = 25
//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDevendas = 50
//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000
//Exiba um alerta com o texto "Erro! Preencha todos os campos"
//alert("Erro! Preencha todos os campos")
//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro!Preencha todos os campos"
// const botaoIniciar = document.getElementById('start-button');




//botaoIniciar.addEventListener('click',iniciarJogo);
//});

//Inicia o Desafio
iniciarDesafio1();