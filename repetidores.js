// // function exmplofor() {
    

// // //for
// // //1 = declara contador
// // //2 = condiçao (enquanto)
// // //3 = incremento.
// // for (let contador = 1; contador <= 5; contador++) {
    
// //     alert(contador);
// // }

// // }

// // function exemplowhile() {
    
// //     let contador =1;

// //     while (contador <= 5) {
        
// //         console.log(contador)

// //     }

// // }
// //  function exemplodowhile() {

// //     let contador = 1;
    
// //     do {

// //         alert(contador);
// //         contador++;
// //     } while ( contador <= 5); 

// //  }

//  function exemplodowhile1() {

//     let contador = 1;
    
//     do {

//         alert(contador);
//         contador++;
//     } while ( contador <= 10); 

//  }
 
//     function exemplodowhile2(){
//         let numero = Number(prompt("Digite um número:"));

//         for (let i = 1; i <= 10; i++) {
//             alert(`${numero} x ${i} = ${numero * i}`);
//         }
        

//     }

//     function exemplodowhile3(){



//         let N = Number(prompt("Digite um número N:"));
//         let soma = 0;
        
//         for (let i = 1; i <= N; i++) {
//             soma += i;
//         }
        
//         console.log(`A soma dos primeiros ${N} números naturais é: ${soma}`);
        

//     }

function nivelint1 () {
    
    let i = 1;

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

}


function nivelint2 (){


    let numero = (prompt("Digite um número para a contagem regressiva:"));

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

}

nivelint2();