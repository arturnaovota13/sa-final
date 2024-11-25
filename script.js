function numeroAleatorio(max, min) {
    let aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return aleatorio
}

function ex1Prova() {
    let matriz1 = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    let matriz2 = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    let somaMatriz = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]


    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1.length; j++) {
            if (i + j == 6) {
                matriz1[i][j] = 5
            }
        }
    }

    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2.length; j++) {
            if (i == j) {
                matriz2[i][j] = 7
            }
        }
    }

    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2.length; j++) {
            somaMatriz[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    console.table(somaMatriz)

    let quest = document.querySelector('#questProva1')
    let dive = document.createElement('pre')
    dive.id = 'resProva1'
    
    quest.appendChild(dive)

    let res = document.getElementById('resProva1')

    res.innerHTML  = `<br>`
    res.innerHTML += `Resultado: <br>`
    res.innerHTML += `[ ${somaMatriz[0]} ] <br>`
    res.innerHTML += `[ ${somaMatriz[1]} ] <br>`
    res.innerHTML += `[ ${somaMatriz[2]} ] <br>`
    res.innerHTML += `[ ${somaMatriz[3]}] <br>`
    res.innerHTML += `[ ${somaMatriz[4]} ] <br>`
    res.innerHTML += `[ ${somaMatriz[5]} ] <br>`
    res.innerHTML += `[ ${somaMatriz[6]} ] <br>`
    res.innerHTML += `<br>`
}

function ex2Prova() {
    let matriz = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    let somaPar = 0, somaImpar = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = numeroAleatorio(20, 1)
        }
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] % 2 == 0) {
                somaPar += matriz[i][j]
            } else if (matriz[i][j] % 2 == 1) {
                somaImpar += matriz[i][j]
            }
        }
    }

    console.table(matriz)
    console.log(`Soma dos números pares: ${somaPar}`)
    console.log(`Soma dos números ímpares: ${somaImpar}`)

    let quest = document.querySelector('#questProva2')
    let dive = document.createElement('pre')
    dive.id = 'resProva2'
    
    quest.appendChild(dive)

    let res = document.getElementById('resProva2')

    res.innerHTML  = `<br>`
    res.innerHTML += `Resultado: <br>`
    res.innerHTML += `[ ${matriz[0]} ]<br>`
    res.innerHTML += `[ ${matriz[1]} ]<br>`
    res.innerHTML += `[ ${matriz[2]} ]<br>`
    res.innerHTML += `[ ${matriz[3]} ]<br>`
    res.innerHTML += `[ ${matriz[4]} ]<br>`
    res.innerHTML += `[ ${matriz[5]} ]<br>`
    res.innerHTML += `[ ${matriz[6]} ]<br>`
    res.innerHTML += `Soma dos Pares: ${somaPar} <br>`
    res.innerHTML += `Soma dos Ímpares: ${somaImpar}<br>`
    res.innerHTML += `<br>`
}

function ex3Prova() {
    let matriz = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let somaColImpar = 0

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            matriz[i][j] = numeroAleatorio(50, 1)
        }
    }
    
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            if(j % 2 == 1) {
                somaColImpar += matriz[i][j]
            }
        }
    }

    console.table(matriz)
    console.log(`Soma dos números das colunas ímpares: ${somaColImpar}`)

    let quest = document.querySelector('#questProva3')
    let dive = document.createElement('pre')
    dive.id = 'resProva3'
    
    quest.appendChild(dive)

    let res = document.getElementById('resProva3')

    res.innerHTML  = `<br>`
    res.innerHTML += `Resultado: <br>`
    res.innerHTML += `[ ${matriz[0]} ]<br>`
    res.innerHTML += `[ ${matriz[1]} ]<br>`
    res.innerHTML += `[ ${matriz[2]} ]<br>`
    res.innerHTML += `[ ${matriz[3]} ]<br>`
    res.innerHTML += `[ ${matriz[4]} ]<br>`
    res.innerHTML += `[ ${matriz[5]} ]<br>`
    res.innerHTML += `[ ${matriz[6]} ]<br>`
    res.innerHTML += `Soma das Colunas Impares:<br>`
    res.innerHTML += `${somaColImpar}<br>`
    res.innerHTML += `<br>`
}

function ordenacao() {
    let quest = document.querySelector('#ordenacao')
    let dive = document.createElement('pre')
    dive.id = 'resOrdenacao'
    
    quest.appendChild(dive)
    
    let res = document.getElementById('resOrdenacao')

    let array = []
    for(let i = 0; i < 10; i++) {
        array.push(numeroAleatorio(30, 1))
    }

    res.innerHTML = `Array Bagunçada:<br> ${array}`
    
    let bubble = array, selection = array, insert = array
    
    let bubbleCont = bubbleSort(bubble)
    let selectionCont = selectionSort(selection)
    let insertCont = insertSort(insert)

    res.innerHTML += `
Array Ordenada: <br>${bubble}
Array Inversa:<br> ${bubble.reverse()}
Voltas do bubbleSort: ${bubbleCont}
Voltas do selectionSort: ${selectionCont}
Voltas do insertSort: ${insertCont}
`
}

function bubbleSort(array) {
    let cont = 0
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let guard = array[i]
                array[i] = array[i + 1]
                array[i + 1] = guard
            }
            cont++
        }
    }
    return cont++
}

function selectionSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let menor = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = array[i]
            array[i] = array[menor]
            array[menor] = guard
        }
    }
    return cont
}

function insertSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        let guard = array[i]
        while (j >= 0 && guard < array[JSON]) {
            array[j + 1] = array[j]
            j--
        }
        cont++
        array[j + 1] = guard
    }
    return cont
}

function exLacoFor() {
    let quest = document.querySelector('#for')
    let dive = document.createElement('pre')
    dive.id = 'resFor'
    
    quest.appendChild(dive)

    let res = document.getElementById('resFor')
    
    let array = []

    for(let i = 0; i < 10; i++) {
        array.push(numeroAleatorio(30, 1))
    }

    console.log('Array Bagunçada: '+array)

    res.innerHTML = `Array Bagunçada: <br>${array}`
    
    bubbleSort(array)

    res.innerHTML += `<br>Array Ordenada:<br> ${array}<br>`
        
    console.log('Array Ordenada: '+array)
    
    for(let i = 0; i < 10; i++) {
        array.pop()
        res.innerHTML += `Pop: ${array} <br>`
        console.log('Pop: '+array)
    }
        
    res.innerHTML += `  `
}

function exLacoWhile() {
    let quest = document.querySelector('#while')
    let dive = document.createElement('pre')
    dive.id = 'resWhile'
    
    quest.appendChild(dive)

    let res = document.getElementById('resWhile')
    
    let number = numeroAleatorio(20, 1)

    res.innerHTML = `Número escolhido: ${number} <br>`
    
    while(number > 0) {
        console.log(number)
        number = number - 1
        res.innerHTML += number + '<br>'
    }

    res.innerHTML += '       '
}

function exIfElse() {
    let quest = document.querySelector('#if')
    let dive = document.createElement('pre')
    dive.id = 'resIf'
    
    quest.appendChild(dive)

    let res = document.getElementById('resIf')
    
    
    let idade = numeroAleatorio(100, -10)

    res.innerHTML = `Idade: ${idade}<br>`

    console.log("Sua idade:" + idade)

    if(idade <= 0) {
        console.log('Inválido')
        res.innerHTML += `Voto Inválido`
    } else if((idade > 0)&&(idade < 16)) {
        console.log('Você não pode votar')
        res.innerHTML += `Não pode votar`
    } else if(((idade >= 16)&&(idade < 17))||idade >= 70) {
        console.log('Voto Opcional')
        res.innerHTML += `Voto Opcional`
    } else if((idade >= 18)&&(idade < 70)) {
        console.log('Voto obrigatório')
        res.innerHTML += `Voto Obrigatório`
    } else {
        console.log('Voto Inválido')
        res.innerHTML += `Voto Inválido`
    }
} 