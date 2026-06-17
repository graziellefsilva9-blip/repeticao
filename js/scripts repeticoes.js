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
