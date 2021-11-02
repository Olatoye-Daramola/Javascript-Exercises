function a (num, bodmas) {
    let x = num
    for (let y = 1; y <= 12; y++) {
        bodmas(x, y)
    }
}

function multiply (x, y) {
    let result = x * y
    console.log(`${x} x ${y} = ${result}`)
}

function addition (x, y) {
    let result = x + y
    console.log(`${x} + ${y} = ${result}`)
}

function square (x, y) {
    let result = x * x
    console.log(`${x} x ${x} = ${result}`)
}

for (let i = 1; i <= 12; i++) {
    a(i, multiply)
}

for (let i = 1; i <= 12; i++) {
    a(i, addition)
}

for (let i = 1; i <= 12; i++) {
    a(i, square)
}
