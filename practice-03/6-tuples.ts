// 기본 문법
let myTuple: [string, number, boolean];

myTuple = ['Hello', 15, false];
// myTuple = ['Hello', false, 15]; // ts error
// myTuple = ['Hello', 15]; // ts error

// 사용 예시 1
function getUserInfo(): [number, string] {
  return [1, 'Sam'];
}

const [userid, username] = getUserInfo();

// 사용 예시 2
type Flavor = string;
type Price = number;
type IceCream = [Flavor, Price];

const vanila: IceCream = ['Vanila', 500];

vanila[0];
vanila[1];

// 사용 예시 3
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([26, -95]);
coords.push([38, 76]);

// coords.push([false, '1']) // ts error

for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
