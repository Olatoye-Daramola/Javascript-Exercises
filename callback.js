function a (num, multiplier) {
    let x = num
    for (let y = 1; y <= 12; y++) {
        multiplier(x, y)
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


for (let i = 1; i <= 12; i++) {
    a(i, multiply)
}

for (let i = 1; i <= 12; i++) {
    a(i, addition)
}
