//contar del 1 al 10

let numbers =1
do{
    console.log(numbers)
    numbers++
}while(numbers<=10)
//contar desde 10 al 1
let numbers2 =10
do{
    console.log(numbers)
    numbers--
}while(numbers>=1)
//mostrar el nombre al reves
const name="scarlet"
let index =name.length-1
do{
    console.log(name[index])
    index--
}while(index >=0)
//mostrar nombre alreves en una linea
let nameconcat=""
index = name.length -1
do{
    nameconcat+=name[index]
    index--

}while(index=>0)
console.log(nameconcat)



