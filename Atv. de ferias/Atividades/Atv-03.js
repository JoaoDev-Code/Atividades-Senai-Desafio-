// Entrada
let idade = Number(prompt("Digite a sua idade atual: "));

// Condição de idade 
if (idade >= 0 && idade < 18) {
    console.log("O futuro está apenas começando: uma fase cheia de descobertas, aprendizados e energia para conquistar o mundo. (Menor de idade)");
} else if (idade >= 18 && idade <= 30) {
    console.log("A fase das grandes escolhas, da independência e da coragem para transformar metas em realidade.");
} else if (idade > 30 && idade <= 40) {
    console.log("A combinação perfeita entre a maturidade das escolhas e a energia para colher os melhores resultados.");
} else {
    console.log("Cada ciclo da vida tem o seu valor: não importa o número, o que conta é a intensidade da sua história.");
}
