//------------------------- QUESTION 1 -------------------------
function mergeArrays(a, b) {
    let newArray = [];

    for (let i = 0; i < a.length; i++) {
        if (!(newArray.includes(a[i]))) newArray.push(a[i]);
        for (let j = 0; j < b.length; j++) {
            if (!(newArray.includes(b[j]))) newArray.push(b[j]);
        }
    }

    return newArray;
}

a = [2, 3, 1]
b = [2, 1, 9, 5, 3]
console.log("Merged array:\n", mergeArrays(a, b))



//------------------------- QUESTION 2 -------------------------
let mergedArray = mergeArrays(a, b)
// ASCENDING ORDER
function sortArrayInAscendingOrder(array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array;
}

console.log("\nSorted in ascending order:\n", sortArrayInAscendingOrder(mergedArray))

// DESCENDING ORDER
function sortArrayInDescendingOrder(array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array;
}

console.log("\nSorted in descending order:\n", sortArrayInDescendingOrder(mergedArray))



//------------------------- QUESTION 3 -------------------------
function mergeAndGroupByDataTypeFrom(a, b) {
    mergedArray = mergeArrays(a, b)
    let string = [], integer = [], boolean = []
    let groupedArray = []

    for (let i = 0; i < mergedArray.length; i++) {
        if (typeof mergedArray[i] === "string") {
            string.push(mergedArray[i])
        } else if (typeof mergedArray[i] === "number") {
            integer.push(mergedArray[i])
        } else if (typeof mergedArray[i] === "boolean") {
            boolean.push(mergedArray[i])
        }
    }
    groupedArray.push(string, integer, boolean)

    return groupedArray
}

c = ["a", 1, true]
d = ["b", 2, false]
console.log("\nMerged and Grouped array:\n", mergeAndGroupByDataTypeFrom(c, d))



//------------------------- QUESTION 4 -------------------------
let arrayObject = [
    {
        id:3,
        firstname:"Saheed",
        lastname: "Adesuwa",
    },
    {
        id:2,
        firstname:"Yetunde",
        lastname: "Hamad"
    },
    {
        id:1,
        firstname:"Goodnews",
        lastname: "Confidence"
    },
    {
        id:4,
        firstname:"Gideon",
        lastname: "Mojoyin"
    }
]

// ASCENDING ORDER
function sortObjectsByIdInAscendingOrder(dictionary) {
    let temp
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = i + 1; j < dictionary.length; j++) {
            if (dictionary[i].id > dictionary[j].id) {
                temp = dictionary[i]
                dictionary[i] = dictionary[j]
                dictionary[j] = temp
            }
        }
    }
    return dictionary
}

console.log("\nArray of sorted objects (ascending order):\n", sortObjectsByIdInAscendingOrder(arrayObject))

// DESCENDING ORDER
function sortObjectsByIdInDescendingOrder(dictionary) {
    let temp
    for (let i = 0; i < dictionary.length; i++) {
        for (let j = i + 1; j < dictionary.length; j++) {
            if (dictionary[i].id < dictionary[j].id) {
                temp = dictionary[i]
                dictionary[i] = dictionary[j]
                dictionary[j] = temp
            }
        }
    }
    return dictionary
}

console.log("\nArray of sorted objects (descending order):\n", sortObjectsByIdInDescendingOrder(arrayObject))


//------------------------- QUESTION 5 -------------------------