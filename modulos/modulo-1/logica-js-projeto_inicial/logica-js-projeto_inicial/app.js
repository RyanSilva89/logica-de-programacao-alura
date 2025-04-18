//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
console.log("Contagem progressiva: 1 a 10");
contador= 1
while(contador <= 10){
    console.log(contador);
    contador++;
}
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
console.log("Contagem regressiva: 10 a 0")
contador = 10
while(contador >= 0){
    console.log(contador);
    contador--;
}
//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
console.log("Contagem regressiva");
contador = Number(prompt("Digite um número"));
while(contador >= 0){
    console.log(contador);
    contador--;
}
//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
console.log("Contagem progressiva");
contador= 0;
let numerofinal= Number(prompt("Digite um número"));
while(contador <= numerofinal){
    console.log(contador);
    contador++;

}