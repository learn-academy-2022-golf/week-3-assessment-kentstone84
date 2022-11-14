// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10   
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
    test("returns an array of the fibonacci sequence", () => {
        expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

//create a function that takes in a number
function fibonacci(num) {
    //create an array with the first two numbers of the fibonacci sequence
    let fibArray = [1, 1]
    //create a for loop that iterates through the array
    for (let i = 2; i < num; i++) {
        //add the previous two numbers in the array and push them into the array    
        fibArray.push(fibArray[i - 2] + fibArray[i - 1])
    }
    //return the array
    return fibArray
}






// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]


const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortStudyMinutes", () => {
    test("returns an array of the values sorted from least to greatest", () => {
        expect(sortStudyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
        expect(sortStudyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
})
// b) Create the function that makes the test pass.

//create a function that takes in an object
function sortStudyMinutes(obj) {
  //create a variable that stores the values of the object in an array
  let studyMinutes = Object.values(obj)    // <--this is the Object.values() method referenced in the instructions// -->
  //create a variable that stores the sorted array
  let sortedMinutes = studyMinutes.sort((a, b) => a - b)
  //return the sorted array
  return sortedMinutes
}



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumulatingSum", () => {
    test("returns an array of the accumulating sum", () => {
        expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
        expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
        expect(accumulatingSum(accountTransactions3)).toEqual([])
    })
})


// b) Create the function that makes the test pass.

//create a function that takes in an array
const accumulatingSum = (arr) => {
    //create a variable that stores the sum of the array
    let sum = 0
    //create a variable that stores the new array
    let newArr = []
    //create a for loop that iterates through the array
    for(let i = 0; i < arr.length; i++){
        //add the sum of the array to the sum of the current index
        sum += arr[i]
        //push the sum into the new array
        newArr.push(sum)
    }
}
    //return the new array
    return newArr