var valorA = 10;
var valorB = 100;
var soma = valorA + valorB;
var subtracao = valorA - valorB;
var multiplicacao = valorA * valorB;
var divisao = valorA / valorB;

var resultadoEx1 = "Soma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao;

window.onload = function () {
    alert("Exercício 1:\n" + resultadoEx1);
};

var ex2 = "";
for (var i = 10; i <= 100; i++) {
    ex2 += i + ", ";
}
document.getElementById("ex2").innerHTML = ex2.slice(0, -2);


var ex3 = "";
var numeroTabuada = 5;
for (var j = 1; j <= 10; j++) {
    ex3 += numeroTabuada + " x " + j + " = " + (numeroTabuada * j) + "<br>";
}
document.getElementById("ex3").innerHTML = ex3;


function exercicio4() {
    var valorInput = parseFloat(document.getElementById("valorInput").value);
    var resultadoEx4 = "";

    if (isNaN(valorInput)) {
        resultadoEx4 = "Por favor, insira um valor numérico válido.";
    } else {
        for (var k = 1; k <= 10; k++) {
            resultadoEx4 += valorInput + " x " + k + " = " + (valorInput * k) + "<br>";
        }
    }

    document.getElementById("resultadoEx4").innerHTML = resultadoEx4;
}

function exercicio5() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        default:
            alert("Operação inválida");
            return;
    }

    document.getElementById("resultado").value = resultado;
}

var ex6 = "";
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var l = 0; l < arrayNumeros.length; l++) {
    if (arrayNumeros[l] % 2 === 0) {
        ex6 += arrayNumeros[l] + ", ";
    }
}
document.getElementById("ex6").innerHTML = ex6.slice(0, -2);

function calcularCustoFinal() {
    var custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
    var percDistribuidor = parseFloat(document.getElementById("percDistribuidor").value) / 100;
    var percImpostos = parseFloat(document.getElementById("percImpostos").value) / 100;

    var custoFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);
    document.getElementById("valorFinal").value = custoFinal.toFixed(2);
}
