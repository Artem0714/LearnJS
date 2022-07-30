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


// function pow(x, n) {
//     let result = x;
//     for (let i=1; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// let x = prompt('Введине Х', '');
// let n = prompt('Введине N', '');

// alert( pow(x, n) )


// #5

/*function ask (question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
ask(
"Вы согласны?",
() => alert("Вы согласились."),
() => alert("Вы отменили выполнение.")
);*/


//________________

//Objects

/*et obj = {};
obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;
alert ( obj.name )*/


/*let isEmpty = function(obj) {
  for (let key in obj){
    return false
  }
  return true
}

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );*/


/*let sum = 0 // на этой задаче было потрачено много времени, мой косяк заключался в том что я не присваивал значения переменной sum, поэтому функция неопределялась!
let SumPrice = function(obj) {
  for (let key in obj) {
    sum += obj[key]
  }
  return sum
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

alert ( SumPrice(salaries) )*/


/*let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
// Тут фундкция была не верна задана, необходимо имеено функция не требующая возврата(Expression)
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
  alert ( obj.width )
  alert ( obj.title )
}

multiplyNumeric(menu)*/




// ОБЪЕКТЫ. КЛОНИРОВАНИЕ. Object.assign - выполняет не глубокое клонирование объекта. для глубокого клонирования стоит использовать - _.cloneDeep(obj)
// ОБЪЕКТЫ. Очистка недостижимых объектов. JAvaScript самостоятельно очищает недостижимые объекты.


//Создание калькулятора из задач по МЕТОДАМ:

/*let calculator = {
  read() {
    this.Number1 = +prompt("Введите первое значение", []);
    this.Number2 = +prompt("Введите второе значение", []);
  },

  sum() {
    return ( (this.Number1) + (this.Number2) )
  },

  mul() {
    return ( this.Number1 * this.Number2 )
  }
}

alert( calculator.read() );
alert( calculator.sum() );
alert( calculator.mul() );*/


let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

alert(ladder.up().up().down().showStep()); // 1