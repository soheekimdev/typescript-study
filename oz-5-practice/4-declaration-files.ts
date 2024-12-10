// console.log('hello trypescript');

// console.print('hello');

import _ from 'lodash';

let max = _.max([3, 5, 1, 6, 4, 2]); // max의 타입이 types.d.ts에서 정의한 대로 변경됨
console.log(max);

let shuffledArray = _.shuffle([12, 3, 6, 1, 7]); // shuffle의 타입이 types.d.ts에서 정의한 대로 변경됨
console.log(shuffledArray);
