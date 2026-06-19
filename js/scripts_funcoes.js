import { calculoPercentual } from "./scripts_calculos.js"


function mensagem(){
    console.log('Hello, wolrd!') 
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Haiti vai perder pro Brasil')

function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('A soma dos numeros 10 e 58 é: ', somaNumeros(10,58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64,5))

console.log('----------> ARROW FUNCTION <-----------')

const msgArrow = () =>{
    console.log('Outra mensagem na arrow function')
}

msgArrow()

const divisaoNum = (valor1, valor2) =>{
    
    let resposta
    
    if((valor1 > 0) && (valor2 > 0)){
        resposta =  valor1 / valor2
    }else{
        resposta = 'NÃO É POSSÍVEL DIVISÃO POR ZERO'
    }

    return resposta
}

console.log(divisaoNum(10, 8000))

console.log(Math.random())

console.log('Numero da mega da virada ---->', parseInt(Math.random() * 100) )

setTimeout(()=>{
    console.log('Excutou após 5s')
}, 5000)

/*let cont = 0
const intervalo = setInterval(()=>{
    cont++
    console.log(cont,'Repetição setInterval')

    if(cont == 5){
        clearInterval(intervalo)
    }
}, 3000)
*/

 const divNumSorteio = document.querySelector('#div-num-sorteio')

let contVolta = 0, numSorteado = 0, contPar = 0, contImpar = 0

/*Const sorteio = setInterval(()=>{
    contVolta ++

    numSorteado = parseInt(Math.random() * 60)


    console.log(`${contVolta}º Numero sorteado ${numSorteado}`)

    if(numSorteado % 2 == 0){
        contPar ++
    }else{
        contImpar++
    }
    
    divNumSorteio.innerHTML += `${contVolta}º numero gerado ${numSorteado} - ${numSorteado % 2 == 0 ? 'PAR': 'IMPAR'} <br>`
    
    if (numSorteado == 6){
        console.log('-------> SORTEIO ENCERRADO <---------')
        
        
        divNumSorteio.innerHTML += `-------> SORTEIO ENCERRADO <--------- <br> TOTAL DE NUMEROS GERADOS: ${contVolta} <br> TOTAL DE NUMEROS PAR: ${contPar} <br> TOTAL DE NUMEROS ÍMPAR: ${contImpar}`
        
        clearInterval(sorteio)
        contVolta = 0
        numSorteado = 0
    }
}, 2000)
*/

//CHAMADA A FUNÇÃO DE OUTRA ARQUIVO 
console.log('CÁLCULO DA FUNÇÃO calculoPercentual DO ARQUIVO scripts_calculos.js --->',calculoPercentual(750))


