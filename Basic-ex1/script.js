let numbers = [1,7, -3, 9];
let max = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > max){
        max = numbers[index];
    }
}
console.log(max);