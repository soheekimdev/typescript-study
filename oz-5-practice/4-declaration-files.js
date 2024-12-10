"use strict";
// console.log('hello trypescript');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.print('hello');
const lodash_1 = __importDefault(require("lodash"));
let max = lodash_1.default.max([3, 5, 1, 6, 4, 2]);
console.log(max);
let shuffledArray = lodash_1.default.shuffle([12, 3, 6, 1, 7]);
console.log(shuffledArray);
