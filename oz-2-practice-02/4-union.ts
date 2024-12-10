// 유니언 기초
let userId: string | number;

userId = 1;
userId = '1';

// userId = true // ts error
// userId = {} // ts error

function printUserId(id: string | number) {
  console.log(id);
}

printUserId('1');
printUserId(1);
// printUserId({}) // ts error

// Type Narrowing
function processValue(value: number | string) {
  if (typeof value === 'number') {
    return toString();
  }
  return value.toUpperCase();
}

// 배열에서의 사용 예시
let mixedValues: (string | number)[];

// mixedValues.push('100');
// mixedValues.push(100);
// mixedValues.push(true); // ts error

// 리터럴과 유니언 타입 - 실무에서 자주 사용
let id: '1';

// id = '2'; // ts error
id = '1';

const toggle = (option: 'on' | 'off') => {
  console.log(option);
};

// toggle('on');
// toggle('off');
// toggle(true); // ts error
// toggle(0); // ts error

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

// let tShirtSize: Size;

// tShirtSize = 'm';
// tShirtSize = 'xxl'; // ts error

function setSize(size: Size) {
  switch (size) {
    case 'xs':
      // xs 처리
      break;
    case 's':
      // s 처리
      break;
    case 'm':
      // m 처리
      break;
    case 'l':
      // l 처리
      break;
    case 'xl':
      // xl 처리
      break;
  }
}

type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

let responseCode: SuccessCode | ErrorCode;

responseCode = 200;
responseCode = 503;

// responseCode = 403; // ts error
