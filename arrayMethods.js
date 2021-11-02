// let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//
// function multiply(x) {
//     for (let y = 1; y <= 12; y++) {
//         console.log(`${x} x ${y} = ${x * y}`)
//     }
// }
//
// function addition(x) {
//     for (let y = 1; y <= 12; y++) {
//         console.log(`${x} + ${y} = ${x + y}`)
//     }
// }
//
// for (let i = 1; i <= 12; i++) {
//     numsArray.forEach(multiply)
// }
//
// for (let i = 1; i <= 12; i++) {
//     numsArray.forEach(addition)
// }

let objArray = [
    {
        gender: "male",
        firstname: "John",
        lastname: "Smith"
    },
    {
        gender: "male",
        firstname: "Demola",
        lastname: "Femi"
    },
    {
        gender: "male",
        firstname: "Tife",
        lastname: "Harry"
    },
    {
        gender: "female",
        firstname: "Kim",
        lastname: "Yetunde"
    }
]

// ------------------- QUESTION 1 -------------------
objArray.forEach(function (individual) {
    console.log(individual.firstname)
})


// ------------------- QUESTION 2 -------------------
let mappedArray = objArray.map(function (individual) {
    individual.fullname =  individual.firstname + " " + individual.lastname
    return individual.fullname
})
console.log("\nFullNames added:\n", mappedArray)


// ------------------- QUESTION 3 -------------------
let filteredMale = objArray.filter(function (individual) {
    return individual.gender === "male"
})

console.log("\nMales only:\n", filteredMale)


// ------------------- QUESTION 4 -------------------
let filteredFemale = objArray.filter(function (individual) {
    return individual.gender === "female"
})

console.log("\nFemales only:\n", filteredFemale)


// ------------------- QUESTION 5 -------------------
let fullName
let ageAdded = objArray.map(function (individual) {
    individual.age = individual.fullname.length - 1
    return individual.age
})
console.log("\nAges added:\n", ageAdded)