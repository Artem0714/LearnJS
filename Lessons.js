// #1
// alert ( 'Я JavaScript!' )

// #2
// let admin
// let name = "Джон"
// admin = name
// alert (admin)

// #3
// let name = prompt('Введите имя', 'Алексей')
// alert (name)

// #4

// function min(a, b) {
//     return (a > b) ? b : a
// }


function pow(x, n) {
    let result = x;
    for (let i=1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt('Введине Х', '');
let n = prompt('Введине N', '');

alert( pow(x, n) )