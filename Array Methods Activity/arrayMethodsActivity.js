// Using concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated Array:", combinedArr);

// Using push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push:", fruits);

// Using unshift()
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift:", array1);

// Using pop()
fruits.pop();
console.log("After pop:", fruits);

// Using shift()
array1.shift();
console.log("After shift:", array1);

// Using sort()
fruits.sort();
console.log("Sorted fruits:", fruits);

// Using slice()
let newFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", newFruits);

// Using splice()
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
console.log("After splice insert:", months);

months.splice(4, 1, "May"); // Replace "June" with "May"
console.log("After splice replace:", months);