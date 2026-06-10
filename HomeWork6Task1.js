// @ts-check 

let numbers = [4, 4, 8, 3, 3, 3, 2, 4, 4]

console.log ('Виведення кожного елемента масиву:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log ('Перші три елементи масиву:');
for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
        console.log(numbers[i]);
    }
}

console.log ('Сума всіх елементів масиву:');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

console.log ('Сума всіх елементів окрім елемента що = 4:');
let sumWithoutFour = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 4) {
        sumWithoutFour += numbers[i];
    }
}
console.log(sumWithoutFour);