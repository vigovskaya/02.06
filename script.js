// // 1 задание 

// let number = +prompt('Введите до какого числа должны выводиться четные числа:', 0);

//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }


// // 2 задание 
// let n = +prompt('Введите число:')
// function isEven() {
//     return n % 2 === 0 ? true : false;
// }
// console.log(isEven());

// // 3 задание 

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]*2);
// }


// 4 задание 

// let arr = ['C#', 'Python', 'Pascal', 'Java Script', 'HTML'];

// let newArr = arr.filter(str => str.length > 5);

// console.log(newArr);


// 5 задание 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers() {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumEvenNumbers(arr));