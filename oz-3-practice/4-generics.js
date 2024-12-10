"use strict";
// 제네릭 (Generics)
// <타입>
// <T>
function genericFunction(arg) {
    return arg;
}
class GenericClass {
}
// Typescript에서 사용되는 몇 가지 빌트인 제네릭 타입들
// Array: 가장 일반적으로 사용되는 제네릭 타입 중 하나
// Array<number>
// Array<string>
let numbers = [1, 2, 3, 4, 5];
let strings = ['1', '2', '3', '4', '5'];
let div = document.querySelector('#myDiv1');
let buttonEl = document.querySelector('#myButton1');
button === null || button === void 0 ? void 0 : button.click(); // button이 html에 없을 수도 있기 때문에(null) ? 사용
// Generic function
// 함수 코드가 중복되는 경우 예시
// function getFirstElement(arr: number[]) {
//   if (!arr.length) {
//     return undefined;
//   }
//   return arr[0];
// }
// function getFirstStringElement(arr: string[]) {
//   if (!arr.length) {
//     return undefined;
//   }
//   return arr[0];
// }
// const firstNumber = getFirstElement(numbers);
// const firstString = getFirstStringElement(strings);
// 함수 코드를 재사용할 수 있도록 제네릭 패턴 사용
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// numbers, strings 배열 모두 하나의 함수를 통해 처리할 수 있게 됨.
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
let strObj = {
    name: 'Elliot',
};
let numObj = {
    age: 30,
};
let entry = {
    key: 'age',
    value: 30,
};
let entry2 = {
    key: 1,
    value: ['red', 'green', 'blue'],
};
