//Estrutura de Repetição for
// const divFor = document.querySelector('#div for')

// for(i - 0;i < 10; i++ ){
//     console.log(i, 'amor')
//     divFor.innerHTML += `${i} - Amor <br> `


//   }

//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0
btnNum.addEventListener('click', (evt)=>{
  evt.preventDefault()
  let numdigitado = Number(inputNum.value)

  cont++
  acum += numdigitado

  divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br>
  A SOMA DOS NUMEROS É: ${acum}`

  inputNum.value = ''

})


//CONTROLADO FOR
const inputfrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnfrase = document.querySelector('#btn-frase')
const divfrase = document.querySelector('#div-frase')

btnfrase.addEventListener('click', (evt) => {
  

  let numRepeti = Number(inputNumRepeticao.value)
  let frase = inputfrase.value

  for (i = 0; i < numRepeti; i++){
    divfrase.innerHTML += `${i + 1} - ${frase} <br>`
  }

})

//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do Mengão', 'Doleira', 'Tênis Adidas'  ]

//console.log(presentes[2])

//presentes[3] = 'Relógio'

const divArray = document.querySelector('#div-array')

//divArray.innerHTML = presentes[6]

for(i = 0;i < 5;i++ ){
  divArray.innerHTML += `${presentes[i]} <br>`
}

//FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
  divForIn.innerHTML += `${presentes[posicao]} <br>`

}

//FOR OF
const divForOf = document.querySelector('#div-forof')

for (let elemento of presentes){
  divForOf.innerHTML += `${elemento} <br>`
}

//FOREACH
const divForeach = document.querySelector('#div-foreach')

presentes.forEach((elemento, posicao)=>{
  divForeach.innerHTML += `${posicao} - ${elemento} <br>`
})

//COLEÇÃO DE OBJETOS LITERAIS - ARRAY
const pessoas = [
  {nome: 'Maria Flor', idade: 25, renda: 8500},
  {nome: 'Joerdson Souza', idade: 75, renda: 5000},
  {nome: 'Taoca', idade: 28, renda: 500},
  {nome: 'Chicó', idade: 36, renda: 100},
  {nome: 'João Grilo', idade: 32, renda: 80},
]

//LISTANDO  OBJETO LITERAL PELO FOR
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length;i++){
  divListaObjFor.innerHTML += `${pessoas[i].nome}, - ${pessoas[i].idade}
  R$ ${pessoas[i].renda.toFixed(2).replace('.',',')} <br>`

}
 
//LISTANDO OBJETOS LITERAL PELO  FOR/IN
const divListaObjForIn= document.querySelector('#div-listaobj-forin')

for(let indece in pessoas){
  divListaObjForIn.innerHTML += `${indece} - ${pessoas[indece].nome}, ${pessoas[indece].idade},  ${pessoas[indece].renda.toFixed(2).replace('.',',')} <br>`

}

//LISTANDO OBJETOS LITERAL PELO FOR/OF
const divListaForOf= document.querySelector('#div-listaobj-forof')

let contForOf = 0
for(let elem of pessoas) {
  contForOf++

  divListaForOf.innerHTML += `${contForOf} - ${elem.nome}, ${elem.idade},  ${elem.renda.toFixed(2).replace('.',',')} <br>`

}

//LISTANDO OBJETOS LITERAL PELO FOREACH
const divListaForeach= document.querySelector('#div-lista-foreach')

pessoas.forEach((elem, i)=>{
  divListaForeach.innerHTML += `${i + 1} - ${elem.nome}, ${elem.idade},  ${elem.renda.toFixed(2).replace('.',',')} <br>`

}

)


