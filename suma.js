const numbers=[1, 20, 30, 40, 50, 60, 70]

let index=0
let suma =0
do{
    suma = suma + numbers[index]
    console.log(suma)
    index++

}while(index < numbers.length)
console.log(suma)