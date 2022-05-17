function countSumArrayElements(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++)
        sum += array[index];
    return sum;
}

let array = [1,2,3,4,5]; //sum = 15


console.log("Результат: " + countSumArrayElements(array)); 

//  node task2.js
//  Результат: 15