/* ------------- 교차 타입 (intersection type) ------------- */
// 두 개 이상의 타입을 결합해서 모든 타입의 속성을 갖는 단일 타입을 생성한다.
// 타입의 재사용성, 조합성을 높일 수 있다.
type A = { name: string };
type B = { age: number };

type Person = A & B;

const person: Person = {
  name: 'John',
  age: 33,
};

type UserBase = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };
type WithAge = { age: number };

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
  id: 100,
  name: 'Paul',
};

const user: User = {
  id: 123,
  name: 'Lee',
  age: 30,
  email: 'test@email.com',
};

/* ------------- 조건부 타입 (conditional type) ------------- */
// type ConditionalType = T extends U ? X : Y;
type IsNumber<T> = T extends number ? 'Yes' : 'No';

type Result1 = IsNumber<number>; // "Yes"
type REsult2 = IsNumber<string>; // "No"

type JsonOrText<T extends 'json' | 'text'> = T extends 'jon' ? object : string;

type JsonREsponse = JsonOrText<'json'>; // object
type TextREsponse = JsonOrText<'text'>; // string

/* ------------- keyof type 연산자 ------------- */
type MyObject = {
  a: number;
  b: string;
  c: boolean;
};

// MyObject 키를 union 타입으로 추출
type Keys = keyof MyObject; // 'a' | 'b' | 'c'

function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, 'y'); // 20 반환
// const value = getProp(obj, 'p'); // ts error obj의 키 중에 'p'가 존재하지 않음

/* ------------- mapped type (매핑 타입) ------------- */
// type Mapped<T> = {
//   [P in keyof T]: T[P];
// };
type OptionalType<T> = {
  [P in keyof T]?: T[P];
};

type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

type UserType = {
  id: number;
  name: string;
  age: number;
  eamil: string;
};

// UserType의 모든 속성을 선택적으로 변환
type OptionalUserType = OptionalType<UserType>;

// UserType의 모든 속성을 읽기 전용으로 변환
type ReadonlyUserType = ReadonlyType<UserType>;
