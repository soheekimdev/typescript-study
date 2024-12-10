"use strict";
// 타입 추론 (Type Inference)
// 변수
let myNumber = 5; // number 타입으로 추론
let myString = 'Hello'; // string 타입으로 추론
let myBool = true; // boolean 타입으로 추론
// myNumber = '5' // ts error
// 함수 반환 타입
function add(x, y) {
    return x + y;
}
const n = add(10, 5); // n의 타입을 number로 추론
// 배열 & 객체
let nums = [1, 2, 3, 4];
let user = { name: 'Eli', age: 30 };
// nums.push('hello') // ts error
// user.age = '30' // ts error
let mixedValues = [1, 2, 3, 'red', 'green', 'blue'];
