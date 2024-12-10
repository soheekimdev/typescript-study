// string
const a: string = '';
const b: string = '';
const c: string = ``;

let myName: string = 'Hongsam';
let message: string = `Hello, ${myName}`;
myName.toLocaleUpperCase();

// number
let n: number = 100;
let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotNumber: number = NaN;

// boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log('Hello we are open');
}
if (!isCompleted) {
  console.log('Job not complete');
}

let isAvailable: boolean = isOpen && !isCompleted;

// null
let user: string | null = null;

function login(userName: string) {
  user = userName;
}
function logout() {
  user = null;
}
login('hongsam');
logout();

// any
let someValue: any;
someValue.toString();
someValue = false;
someValue.toFixed();