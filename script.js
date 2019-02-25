'use strict';



console.log(4/0);
console.log('string'*1);

let something;
console.log(something);

let person = {
    name: "John",
    age: 23, 
    isMarried: false
};

console.log(person["name"]);

let arr = ['man.jpg', 'orange.png', 'slip.bmp'];
console.log(arr[0]);

//alert("Hello World!");

/*let answer = confirm("Are you here?");
console.log(answer);*/

//let answer = +prompt("Тебе 18 лет?", "");

/*console.log(typeof(answer));

console.log("arr" + " - object");*/

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%3);

console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);    
