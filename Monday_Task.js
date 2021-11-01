// QUESTION 1
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
// console.log(mergeArrays(a, b))


// QUESTION 2
function sortArray(array) {
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

console.log(sortArray(mergeArrays(a, b)))
