console.log('wassup')
console.log(4+4)

// sentence = 'ayoo'
// console.log(sentence)

// but we haven't initialised our variable
// we use either of them -> [var, let, const]
// let and const comes in modern syntax
// const is when our variable is never gonna change & let when it can be anything

const sentence = 'hi mom'

let all_childs = 2
all_childs = 4
all_childs = 3

let the_boys = all_childs // this is called assignment by reference

console.log(sentence,'we have', all_childs, 'babies now')

true && false // this are booleans

let first_wife_childs = {
    james: 'is second child',
    lucy: 'was\'nt first child',
    ass_by_ref: sentence
}          
// this is a dictionary syntax with key value pairs
// dictionary should be assigned with a variable

console.log(first_wife_childs)

let example_array = [1,5,7,9]


let is_true = true

function myFirstFunction() {
    // output the value of is_true
    console.log(example_array)
    //console.log(console) 
}
myFirstFunction()

// now we'll see functions(including arguments)

function multiplyNumbers(value, secondValue) {

    console.log(value * secondValue)
}

// ( == ) operator check only content to be equal
// ( === ) operator check both content and data type, used for strict equality
// same is the diff of ( != ) & ( !== )

multiplyNumbers(3, 5)
multiplyNumbers(5, 1)
multiplyNumbers(6, 9)

// && (AND), || (OR) !

let condition1 = true
let condition2 = false

console.log(condition1 &&  condition2)
console.log(condition1 || condition2)
console.log(!condition1, !condition2)

//check data type

console.log(typeof example_array, myFirstFunction)
console.log(myFirstFunction)
console.log(typeof first_wife_childs)

// control flow - through conditional statements and loops

if (condition1) {
    // console.log('hi mom')
}

// if and else

if (condition2) {
    console.log('hi mom')
} else {
    console.log('i lied it was false')
}

// if , else if , else

if (condition1 && condition2) {
    console.log('hi mom')
} else if (condition1 || condition2) {
    console.log('one condition of the two is true')
} else {
    console.log('i lied, it was false, so here we are')
}

example_array = [1, 5, 7, 9, 10, 12, 555]

let i = 0
let length = example_array.length

// while(i < length) {
//     console.log('value was true: ', i, example_array[i])
//     i = i + 1  // or i++
// }
// if we dont add this line of code 
// (i = i + 1 ), its gonna be a infinite loop
// while loop runs till its condition is true

for (let j = 0; j < length; j++) {

    if (j % 2 === 0) {
        continue // skips the loop when condition satisfies
        // ( if we use 'break' instead of continue then it kills the loop when condition match )
    }
    console.log('value was true: ', j, example_array[j])
}

// function addStrings(string1, string2) {
//     console.log(string1, string2)
// }

// addStrings('hello', 'mum')

// now to make above code better, we rewrite it as

// function addStrings(string1, string2) {

//     if (!string1 || !string2) {
//         console.log('You are missing an input!')
//         return
//     }

//     let concatString = string1 + '' + string2
//     console.log(concatString) 
//     //can also add/concatinate like this
// }

// addStrings('hello')


//now we can write it like this also, called god clause
function addStrings(string1 = 'default1', string2 = 'default2') {
    let concatString = string1 + ' ' + string2
    console.log(concatString)
    return concatString
}

let newString = addStrings('hello')
console.log('The new string is:',newString)