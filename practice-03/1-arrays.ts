// 배열 타입 방법 1: type[]
let nums: number[] = [1, 2, 3, 4, 5]; // 숫자만 허용하는 배열
let strs: string[] = ['a', 'b', 'c']; // 문자열만 허용하는 배열
let bools: boolean[] = [false, false, true]; // boolean만 허용하는 배열

nums.push(6);
nums.push(7);
// nums.push('8'); // ts error
// nums[0] = '1'; // ts error
// bools.push('1'); // ts error

// 배열 타입 방법 2: Array<>
// let nums: Array<number> = [1, 2, 3, 4, 5]; // 숫자만 허용하는 배열
// let strs: Array<string> = ['a', 'b', 'c']; // 문자열만 허용하는 배열

// nums.push(6);
// nums.push(7);
// nums.push('8'); // ts error
// nums[0] = '1'; // ts error
