// 기본 객체 타입
// {
//   property_name: property_type
// }

// 타입 명시
// let monitor: {
//   brand: string;
//   price: number;
// };

// monitor.brand = 'LG';
// monitor.price = 120;

// monitor = {
//   brand: 'LG',
//   // ts error
// };

// monitor.displaySize = '22inch'; // ts error

// 타입 추론
// let monitor = {
//   brand: 'LG',
//   price: 120,
// };

// monitor.price = '123'; // ts error
// monitor.displaySize = '12inch'; // ts error

// Optional 프로퍼티
// let user: { id: string; name: string; age?: number };
// user = {
//   id: '1234',
//   name: 'Hongsam',
// };

// Readonly 프로퍼티
let user: { readonly id: string; name: string; age?: number };
user = {
  id: '1234',
  name: 'Hongsam',
};
user.name = 'Sohee';
// user.id = '5678'; // ts error

// 런타임에서 절대 변경되면 안 되는 값들에 많이 사용
let apiConfig: {
  readonly clientKey: string;
  readonly url: string;
};

// 타입 별칭 (Type Alias)
type UserType = {
  id: string;
  name: string;
  age: number;
};

let user1: UserType = {
  id: '1',
  name: 'Hongsam',
  age: 1,
};

let user2: UserType = {
  id: '2',
  name: 'Sarah',
  age: 30,
  // email: 'test@email.com' // ts error
};

let users: UserType[];

// users.push(user1);
// users.push(user2);

// users.push({}); // ts error
// users.push({ // ts error
//   id: '1',
// })

// Nested 객체 (중첩 객체)
type Payload = {
  timestamp: number;
  type: string;
  user: {
    readonly id: string;
    isActive?: boolean;
    email: string[];
  };
};

const payload: Payload = {
  timestamp: 12893718,
  type: 'event',
  user: {
    id: '123',
    isActive: true,
    email: ['test@email.com', 'test2email.com'],
  },
};
