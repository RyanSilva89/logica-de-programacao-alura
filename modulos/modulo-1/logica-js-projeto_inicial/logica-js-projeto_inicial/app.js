
alert("Bem vindo(a) ao desafio 4");
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Bem vindo(a) ao Jogo");

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Andrew";
console.log(`Olá, ${nome}`);
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let LinguagemFavorita = prompt("Qual a sua linguagem favorita?")
alert( `A sua linguagem favorita é ${LinguagemFavorita}`)
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1000;
let valor2 = 7;
let soma =  valor1 + valor2;
let resultado = `A soma de ${valor1} e ${valor2} é igual a  ${soma}`;
alert(resultado);
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let Valor1 = 1000;
let Valor2 = 7;
let subtracao = Valor1 - Valor2;
let resultadoSubtracao = ` A difirenca entre ${Valor1} e ${Valor2} é igual a  ${subtracao}`;
alert(resultadoSubtracao);
//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade =prompt("Qual a sua idade")
if(idade >=18){
     alert("Você pode tirar carteira de qualquer veiculo")
}else{
    alert("Você ainda não tem idade o suficiente para tirar a carteira de veiculos")
}
//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número");
if(numero > 0){
    alert("O número é positivo")

}else if (numero <0){
    alert("O número é negativo")
}else{
    alert("O número é zero")
}
//Use um loop while para imprimir os números de 1 a 10 no console.
let numeros = 1;
while(numeros >= 10);{
    console.log(numeros);
    numeros++;
}
//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10; // feito uma atribuição nesse caso irá sempre mostrar aprovado com o valor atual
if(nota >= 7){
    alert( `Aprovado,sua nota foi ${nota}` )
}else{
    alert("Reprovado")
}if(nota < 7){
    alert("Precisa fazer uma prova de recuperação para tentar atingir média 7")
}
//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
alert("Número aleatório")
let numAleatorio = Math.random();
alert(numAleatorio);
//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
alert("Número aleatório entre 1 e 10")
let numeroAleatorio = parseInt(Math.random()*10 + 1);
alert(numeroAleatorio)
//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
alert("Número aleatório entre 1 e 1000")
let numeroAleatorio2 = parseInt(Math.random()*1000 + 1);
alert(numeroAleatorio2)
