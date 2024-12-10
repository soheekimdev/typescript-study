// 제네릭 (Generics)

// <타입>
// <T>

function genericFunction<T>(arg: T): T {
  return arg;
}

interface GenericInterface<T> {}

class GenericClass<T> {}

// Typescript에서 사용되는 몇 가지 빌트인 제네릭 타입들

// Array: 가장 일반적으로 사용되는 제네릭 타입 중 하나
// Array<number>
// Array<string>
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ['1', '2', '3', '4', '5'];

let div = document.querySelector<HTMLDivElement>('#myDiv1');
let buttonEl = document.querySelector<HTMLButtonElement>('#myButton1');

button?.click(); // button이 html에 없을 수도 있기 때문에(null) ? 사용

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
function getFirstElement<T>(arr: T[]): T | undefined {
  if (!arr.length) {
    return undefined;
  }

  return arr[0];
}

// numbers, strings 배열 모두 하나의 함수를 통해 처리할 수 있게 됨.
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);

// Generic Interface
// Typescript에서 interface를 정의할 때 타입 매개변수를 사용하는 것.
// 그래서 조금 더 유연하게 interface를 구성할 수 있게 하는 기능
// 객체에서 key는 무조건 string. value의 타입을 지정.

// interface 코드가 중복되는 예시
interface strDict {
  [key: string]: string;
}
interface numDict {
  [key: string]: number;
}

// let strObj: strDict = {
//   name: 'Elliot',
// };
// let numObj: numDict = {
//   age: 30,
// };

// Generic interface 적용
interface Dict<T> {
  [key: string]: T;
}

let strObj: Dict<string> = {
  name: 'Elliot',
};
let numObj: Dict<number> = {
  age: 30,
};

// 여러 개의 타입을 전달하는 Generic interface 예시
interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: 'age',
  value: 30,
};
let entry2: Entry<number, string[]> = {
  key: 1,
  value: ['red', 'green', 'blue'],
};
