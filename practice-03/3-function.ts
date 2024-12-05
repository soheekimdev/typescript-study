// Parameter
function add(x: number, y: number): number {
  return x + y;
}

const result = add(10, 5);

// Parameter 2
// function addToCart(name: string, price: number, quantity: number) {
//   return `${name}, ${price}, ${quantity}`;
// }

// addToCart('orange', 100, 5);
// addToCart('pineapple', 150); // ts error
// addToCart('grape', 110, 10, false); // ts error

// Default Parameter
// function addToCart(name: string, price: number, quantity: number = 1) {
//   return `${name}, ${price}, ${quantity}`;
// }
// addToCart('orange', 10); // 'orange', 10, 1
// addToCart('pineapple', 5, 3); // 'pineapple', 5, 3

// Optianal Parameter
// function addToCart(name: string, price: number, quantity?: number) {
//   return `${name}, ${price}, ${quantity}`;
// }

// addToCart('orange', 150); // 'orange', 150, undefined
// addToCart('grape', 100, 2); // 'grape', 100, 2

function addToCart(name: string, price: number, quantity?: number) {
  // if(quantity) {
  //   // logic 처리
  // }
  return `${name}, ${price}, ${quantity || 1}`;
}

addToCart('orange', 150); // 'orange', 150, 1
addToCart('grape', 100, 2); // 'grape', 100, 2

// Contextual Typing
// 함수 사용 시 자동 유추 시스템을 추천
// const numbers: number[] = [1, 2, 3, 4, 5];
// const letters: string[] = ['a', 'b', 'c', 'd'];

// numbers.map((element) => {
//   element.toString();
// });

// letters.forEach((letter) => {
//   letter.length;
// });

// Return Type Annotation
function addTwoValues(x: number, y: number): string {
  return `${x}${y}`;
}
function addTwoNumbers(x: number, y: number): number {
  return x + y;
}
function isTen(x: number, y: number): boolean {
  return x + y === 10;
}

// void, never
function logMessage(message: string): void {
  console.log(message);
}
// never 타입은 용도가 굉장히 제한적이라 일반적으로 잘 사용하지는 않는다.
function throwError(message: string): never {
  throw new Error(message);
}
