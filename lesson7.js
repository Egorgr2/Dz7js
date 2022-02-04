//задача 1
let list2 = [0, 1, false, 2, undefined, '', 3, null]
const result = [];

for( let value2 of list2){
 if( typeof value2==="number"){
   result.push(value2)
 }

}
console.log(result);




//задача 2
let list1 = [true, false, true, false, true, true];
let listTrue = [];
let listFalse = [];

for (let value1 of list1) {
  if (value1 === true) {
    listTrue.push(value1);
  } else {
    listFalse.push(value1);
  }
}

console.log(
  listTrue.length > listFalse.length ? "true больше" : "false больше"
);





//задача 3

const num = [1, 5, 2, 11, 17, 53];
for (let i = 0; i < num.length; i += 1) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
  }
}


//задача 4
let list =  [2, 1, 3] ;
let result2 = [];
for (let value of list){
result.push(value * 2 );
}
console.log(result2);

//задача 5

const num1 = Number(prompt("Введіть перше число"));
const operator = prompt("Введіть оператор вичислення");
const num2 = Number(prompt("Введіть друге число"));
let result1;
switch (operator) {
  case "+":
    result1 = num1 + num2;
    break;
  case "-":
    result1 = num1 - num2;
    break;
  case "/":
    result1 = num1 / num2;
    break;
  case "*":
    result1 = num1 * num2;
    break;
  default:
    console.log("Не можливо вирішити");
}
