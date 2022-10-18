
/* EX01 */

let NumeroA = parseInt(prompt("Insira o Primeiro Numero:"))
let NumeroB = parseInt(prompt("Insira o Segundo Numero:"))

if(NumeroA > NumeroB){

    alert(`O maior número é ${NumeroA} e a diferença é ${NumeroA-NumeroB}`)
}
else{

    alert(`O maior número é ${NumeroB} e a diferença é ${NumeroB-NumeroA}`)
}

/* EX02 */


let NumeroA = parseFloat(prompt("Insira o Primeiro Numero:"))
let NumeroB = parseFloat(prompt("Insira o Segundo Numero:"))

if(NumeroA > NumeroB){

    alert(`O maior número é ${NumeroA} e a diferença é ${NumeroA-NumeroB}`)
}
else if(NumeroA == NumeroB){ 

    alert(`Os numeros são iguais!`)
}
else{

    alert(`O maior número é ${NumeroB} e a diferença é ${NumeroB-NumeroA}`)
}


/* EX03 */

let salario = parseInt(prompt("Insira seu salario:"))
let emprestimo = parseInt(prompt("Insira o valor da prestação:"))

if(salario*0.3 < emprestimo){
    alert("Empréstimo não concedido")
}
else{
    alert("Empréstimo concedido")
}

/* EX04 */

let numero = parseInt(prompt("Insira seu numero"))

let divA = numero%3
let divB= numero%5
let divC = numero%2


if(divA == 0 && divB == 0){

    console.log("Numero invalido")
}

    else if(divA == 0){

    console.log("Valor divisível por 3")
    }

    else if(divB == 0){

    console.log("Valor divisivel por 5")
    }

    else if(divC == 0){

        console.log("O seu numero é par")
    }  

    else if (divC != 0){

        console.log("O seu numero é impar")
    }


/* EX05 */

let numeroData = parseInt(prompt("Insira o numero equivalente ao dia da semana (sendo domingo o numero 1)"))

if(numeroData == 1){

    alert("o dia equivalente é domingo")
}

else if(numeroData == 2){

    alert("o dia equivalente é Segunda")
}

else if(numeroData == 3){

    alert("o dia equivalente é Terça")
}

else if(numeroData == 4){

    alert("o dia equivalente é Quarta")
}

else if(numeroData == 5){

    alert("o dia equivalente é Quinta")
}

else if(numeroData == 6){

    alert("o dia equivalente é Sexta")
}

else if(numeroData == 7){

    alert("o dia equivalente é sabado")
}

else{

    alert("Esse dia existe mesmo?")
}


/* EX06 */

let salario = parseFloat(prompt("Insira o salario do contribuidor:"))
let imputReajuste = parseFloat(prompt("Insira a taxa de reajuste do colaborador(em %):"))

let reajusteReal = imputReajuste/100

if(reajusteReal > 0.05){
    alert("O reajuste é até 5%, tente novamente:")
}

else if(reajusteReal < 0){
    alert("O reajuste precisa ser entre 0-5%")
}
else if(reajusteReal<= 0.05)
    alert(`O salario do colaborador corrigido é de: R$ ${(salario*reajusteReal)+salario}`)


/* EX07 */

let valorEmReal = parseFloat(prompt("Insira o valor a ser convertido em R$"))
let valorDoDolar = parseFloat(prompt("Insira o valor do dolar hoje"))

    alert(`$${valorEmReal/valorDoDolar} é equivalente a R$${valorEmReal}, tendo $${valorDoDolar} dolares como cotação.`)

    
/* EX08 */

// ?

/* EX09 */

let tempo = parseFloat(prompt("Quantas horas foram gastas na viagem?"))
let velocidade = parseFloat(prompt("Qual a velocidade media do veiculo na viagem?(km/h)"))

let distancia = tempo*velocidade

let litro = distancia/12

alert(`Seu veículo percorreu ${distancia}km a ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litro.toFixed(2)}l de gasolina`)

/* EX10 */

let valor = parseInt(prompt("Insira o valor total"))
let taxa = parseInt(prompt("Insira o valor da taxa"))
let tempo = parseInt(prompt("Insira a quantidade de parcelas"))

if (tempo <= 0){
    alert("Valor inválido o tempo de atraso deve ser em dias.")
}

else{
    alert(`o valor da prestação é de: ${valor + (valor* (taxa/100)*tempo)}`)
}
