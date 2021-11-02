let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function multiply(x) {
    for (let y = 1; y <= 12; y++) {
        console.log(`${x} x ${y} = ${x * y}`)
    }
}

function addition(x) {
    for (let y = 1; y <= 12; y++) {
        console.log(`${x} + ${y} = ${x + y}`)
    }
}

for (let i = 1; i <= 12; i++) {
    numsArray.forEach(multiply)
}

for (let i = 1; i <= 12; i++) {
    numsArray.forEach(addition)
}
