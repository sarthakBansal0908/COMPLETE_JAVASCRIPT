// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.

let name = 'Sarthak'
name = 'Sarthak Bansal'

// 2. How would you compare two variables, a and b, to check equality?

let a = 5
let b = 6
console.log(a === b)

// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".

let age = 27
if (age > 18) {
    console.log('Adult')
} else {
    console.log('Minor')
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

let num_to_ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_lenght = num_to_ten.length
for (let k = 0; k < array_lenght; k++) {
    
    let currentValue = num_to_ten[k]
    let is_even = currentValue % 2 === 0
    if (is_even)
        console.log(currentValue)
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.

let arr_numbers = [20,5,7,12,19,24,18,38,29,55,37]
let sum = 0
let i = 0

while (sum < 100) {
    let new_current_value = arr_numbers[i]
    sum = sum + new_current_value
    i++
}

console.log(sum)

// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height

function calculateArea(width, height) {
    const area = width * height
    return area
}

let area_one = calculateArea(5,8)
console.log('The area is:',area_one)