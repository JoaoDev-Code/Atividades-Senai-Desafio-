
// ================================
// 1. DATA ATUAL
// ================================

let dataAtual = document.getElementById("dataAtual");

dataAtual.textContent = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

// 2. ELEMENTOS DO HISTÓRICO

let historico = document.getElementById("historico");
let btnLimparHistorico = document.getElementById("btnLimparHistorico");

function registrarHistorico(mensagem) {
    // Remove a mensagem inicial quando a primeira operação acontecer.
    if (historico.querySelector(".historico-vazio")) {
        historico.innerHTML = "";
    }

    let item = document.createElement("li");
    let texto = document.createElement("span");
    let horario = document.createElement("time");

    texto.textContent = mensagem;

    horario.textContent = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    item.appendChild(texto);
    item.appendChild(horario);

    // Coloca a operação mais recente no começo.
    historico.prepend(item);
}

btnLimparHistorico.addEventListener("click", function() {
    historico.innerHTML = "";

    let mensagem = document.createElement("li");
    mensagem.className = "historico-vazio";
    mensagem.textContent = "Nenhuma operação realizada ainda.";

    historico.appendChild(mensagem);
});


// 3. CADASTRO DE ALUNO

let formCadastro = document.getElementById("formCadastro");

let campoNome = document.getElementById("nome");
let campoIdade = document.getElementById("idade");
let campoCidade = document.getElementById("cidade");

let resultadoCadastro = document.getElementById("resultadoCadastro");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = campoNome.value.trim();
    let idade = Number(campoIdade.value);
    let cidade = campoCidade.value.trim();

    resultadoCadastro.className = "resultado";

    if (nome === "" || campoIdade.value === "" || cidade === "") {
        resultadoCadastro.classList.add("erro");
        resultadoCadastro.querySelector("p").textContent =
            "Preencha todos os campos do cadastro.";
        return;
    }

    if (idade < 0 || idade > 120 || !Number.isInteger(idade)) {
        resultadoCadastro.classList.add("erro");
        resultadoCadastro.querySelector("p").textContent =
            "Digite uma idade inteira entre 0 e 120.";
        return;
    }

    let situacaoIdade;

    if (idade >= 18) {
        situacaoIdade = "Maior de idade";
    } else {
        situacaoIdade = "Menor de idade";
    }

    resultadoCadastro.classList.add("sucesso");

    resultadoCadastro.querySelector("p").textContent =
        "Aluno: " + nome +
        "\nIdade: " + idade + " anos" +
        "\nCidade: " + cidade +
        "\nSituação: " + situacaoIdade;

    console.log("Cadastro realizado:", nome, idade, cidade);

    registrarHistorico(
        "Cadastro: " + nome + " — " + situacaoIdade + "."
    );
});

// 4. SOMA DE DOIS NÚMEROS

let formSoma = document.getElementById("formSoma");

let campoNumero1 = document.getElementById("numero1");
let campoNumero2 = document.getElementById("numero2");

let resultadoSoma = document.getElementById("resultadoSoma");

formSoma.addEventListener("submit", function(event) {
    event.preventDefault();

    let numero1 = Number(campoNumero1.value);
    let numero2 = Number(campoNumero2.value);

    resultadoSoma.className = "resultado";

    if (
        campoNumero1.value === "" ||
        campoNumero2.value === "" ||
        !Number.isFinite(numero1) ||
        !Number.isFinite(numero2)
    ) {
        resultadoSoma.classList.add("erro");
        resultadoSoma.querySelector("p").textContent =
            "Digite dois números válidos.";
        return;
    }

    let soma = numero1 + numero2;

    resultadoSoma.classList.add("sucesso");
    resultadoSoma.querySelector("p").textContent =
        numero1 + " + " + numero2 + " = " + soma;

    console.log("Resultado da soma:", soma);

    registrarHistorico(
        "Soma: " + numero1 + " + " + numero2 + " = " + soma + "."
    );
});

// 5. MÉDIA ESCOLAR

let formMedia = document.getElementById("formMedia");

let campoNota1 = document.getElementById("nota1");
let campoNota2 = document.getElementById("nota2");

let resultadoMedia = document.getElementById("resultadoMedia");

formMedia.addEventListener("submit", function(event) {
    event.preventDefault();

    let nota1 = Number(campoNota1.value);
    let nota2 = Number(campoNota2.value);

    resultadoMedia.className = "resultado";

    if (campoNota1.value === "" || campoNota2.value === "") {
        resultadoMedia.classList.add("erro");
        resultadoMedia.querySelector("p").textContent =
            "Digite as duas notas.";
        return;
    }

    if (
        !Number.isFinite(nota1) ||
        !Number.isFinite(nota2) ||
        nota1 < 0 ||
        nota1 > 10 ||
        nota2 < 0 ||
        nota2 > 10
    ) {
        resultadoMedia.classList.add("erro");
        resultadoMedia.querySelector("p").textContent =
            "As notas devem estar entre 0 e 10.";
        return;
    }

    let media = (nota1 + nota2) / 2;
    let situacao;

    if (media >= 6) {
        situacao = "Aprovado";
        resultadoMedia.classList.add("sucesso");
    } else {
        situacao = "Em recuperação";
        resultadoMedia.classList.add("erro");
    }

    resultadoMedia.querySelector("p").textContent =
        "Nota 1: " + nota1 +
        "\nNota 2: " + nota2 +
        "\nMédia final: " + media.toFixed(2) +
        "\nSituação: " + situacao;

    console.log("Média:", media);
    console.log("Situação:", situacao);

    registrarHistorico(
        "Média: " + media.toFixed(2) + " — " + situacao + "."
    );
});

// 6. SELEÇÃO DE ELEMENTO COM DOM

let btnDom = document.getElementById("btnDom");
let resultadoDom = document.getElementById("resultadoDom");

btnDom.addEventListener("click", function() {
    let areaParagrafos = document.getElementById("paragrafosExercicio");

    let paragrafos = areaParagrafos.getElementsByTagName("p");

    // O índice 0 é o primeiro; o índice 1 é o segundo.
    let segundoParagrafo = paragrafos[1];

    resultadoDom.className = "resultado sucesso";
    resultadoDom.querySelector("p").textContent =
        "Texto selecionado: " + segundoParagrafo.textContent;

    console.log(segundoParagrafo);

    registrarHistorico(
        "DOM: segundo parágrafo selecionado com sucesso."
    );
});