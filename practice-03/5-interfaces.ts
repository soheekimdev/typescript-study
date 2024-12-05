// 기본 문법
// interface 이름 {
//   속성이름: 속성타입;
//   속성이름: 속성타입;
//   메서드이름(): 메서드타입;
// }

// interface User {
//   id: number;
//   name: string;
//   isPremium: boolean;
//   someMethod(): void;
// }

// const userA: User = {
//   id: 10,
//   name: 'Bill',
//   isPremium: false,
//   someMethod() {
//     console.log('some method called');
//   },
// };

// Type Alias vs Interface
// 두 기능의 목적은 크게 다르지 않다.
// 차이점 1: 문법적 차이
// Type Alias => type User = {}
// Interface => interface User {}
// 차이점 2: 지원되는 자료구조의 타입
// Type Alias => 객체 포함, 리터럴, 원시값 등을 타입으로 가질 수 있다.
// Interface => 객체 타입(형태)으로 사용해야 한다.
// 차이점 3: 확장 문법이 다르다.

// Readonly & Optional Property
// interface User {
//   readonly id: number;
//   name: string;
//   isPremium?: boolean;
// }

// const testUser: User = {
//   id: 100,
//   name: 'John',
// };

// testUser.id = 200; // ts error

// 메서드/함수 타입
interface User {
  readonly id: number;
  name: string;
  isPremium?: boolean;
  greet(): void;
  greet2(message: string): string;
}

const testUser: User = {
  id: 100,
  name: 'Nathan',
  isPremium: false,
  greet() {
    console.log('Hello Nathan');
  },
  // parameter의 타입을 interface에서 정의한 것과 동일하게 작성해야 한다.
  greet2(message: string) {
    return `${message}, ${this.name}`; // interface에서 정의한 반환 타입을 맞춰야 한다.
  },
};

testUser.greet();
testUser.greet2('Hello'); // Hello, Nathan

// 확장 및 조합
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

interface Student extends Person, Employee {
  studentId: number;
}

const personA: Person = {
  name: 'Hongsam',
  age: 1,
};

const personB: Student = {
  name: 'Zzajang',
  age: 1,
  studentId: 123,
  employeeId: 456,
};
