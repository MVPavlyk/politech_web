// /*
// /!* Реалізувати злиття масиву слів у стрічку. Допустим є написання функцій.*!/
//
// let wordsArray = ['hello', 'word']
//
// const arrayToString = (arr) => arr.join(" ");
//
// console.log(arrayToString(wordsArray));
//
// /!* Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр *!/
//
// let string = 'lorem ipsum dolor'
//
// const firstLetterUp = (str) => {
//     const wordArray = str.split(' ');
//     const upperCaseArray = []
//     wordArray.map(word => {
//         upperCaseArray.push(word[0].toUpperCase() + word.slice(1))
//     })
//     return upperCaseArray.join(' ')
// }
//
// console.log(firstLetterUp(string));
//
//
// /!*Написати функцію, яка порахує перші n числа Фібоначі*!/
//
// const fibonacci = (count) => {
//     let resArray = [0, 1];
//     if (count < 1) {
//         return 0;
//     }
//     if (count < 2) {
//         return [0];
//     }
//     for (let i = 2; i < count; i++) {
//         const number = resArray[i - 1] + resArray[i - 2];
//         resArray.push(number);
//     }
//     return resArray;
// };
//
// console.log(fibonacci(6));
//
// /!* Написати функцію, яка видалить усі дублі із масиву стрічок *!/
//
// let stringArray = ['str1', 'str2', 'str1', 'str2', 'str3'];
//
// const deleteDublicate = (array) => {
//     let resultArray = [];
//     for (const string of array) {
//         if(!resultArray.includes(string)){
//             resultArray.push(string)
//         }
//     }
//     console.log(resultArray);
// }
//
// deleteDublicate(stringArray)
//
//
// /!* Написати функцію, яка порахує різницю між датами у днях/тижнях/секундах. *!/
//
//
// const date1 = new Date('02-19-2022');
// const date2 = new Date('02-21-2022');
//
// const dayGap = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
// const weekGap = Math.round(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 7));
// const secondGap = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000));
//
// console.log('Дні: + 'dayGap);
// console.log('Тижні: + 'weekGap);
// console.log('Секунди: + 'secondGap);
//
//
// /!* Написати реалізацію сортування злиттям масиву *!/
//
// function merge(left, right) {
//     let arr = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift())
//         } else {
//             arr.push(right.shift())
//         }
//     }
//
//     return [ ...arr, ...left, ...right ]
// }
//
// function mergeSort(array) {
//     const half = array.length / 2
//     if(array.length < 2){
//         return array
//     }
//     const left = array.splice(0, half)
//     return merge(mergeSort(left),mergeSort(array))
// }
// const arr = [3,4,2,1]
//
// console.log(mergeSort(arr));
//
//
// */
