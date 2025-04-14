// let numero = prompt("digite um numero:");

// if (numero > 0) {

// console.log("positivo.")

// }else {

// if( numero < 0) {

// console.log("negativo.")

// }else {

// console.log(" e zero")

// }

function exercicio01() {


    let idade = prompt("digite sua idade: ");

    if (idade >= 18) {

        alert("voce e maior de idade.");
    } else {

        alert("voce e menor de idade.")

    }

}
exercicio01();

function exercicio02() {

    let numero = prompt("digite seu numero.");

    if (numero > 0) {

        alert("numero correto");

    } else {

        alert("numero incorreto");

    }

}
exercicio02();

function exercicio03() {

    let nota = prompt("digite sua nota");

    if (nota >= 60) {

        alert("aprovado");

    } else {

        alert("reprovado")

    }

}
exercicio03();

function exercicio05() {

    let idade = prompt("digite sua idade: ")

    if (idade >= 0 && idade <= 12) {

        alert("voce e uma crianca")

    } else {

        if (idade >= 13 && idade <= 17) {

            alert("voce e um adolecente");
        }

    } if (idade >= 18) {

        alert("voce e maior de idade");

    } else {

        alert("idade invalida")

    }

}



function execicio06() {

    let numero = prompt("insira o numero");

    if (numero % 2 == 0) {

        alert("seu numero e par")

    } else {

        alert("seu numero e impar")

    }

}

function exerc07 (){
    debugger
let numero1 =Number (prompt ("Digite o primeiro número:"));

let operacao = prompt("Digite a operação (+, -, *, /):");

let numero2 = Number(prompt("Digite o segundo número:"));


if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
}
alert("O resultado é: " + resultado);
   
}
 exerc07();
 
function exerc08 (){
    let valor = prompt("Digite o valor de sua compra");
   
    if (valor >=100 ) {
        valor = valor * 0,10;
        alert("Desconto aplicado!")
    } else {
        alert("desconto não aplicado")
    }
         
}


