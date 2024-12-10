"use strict";
// 비동기 프로그래밍
// 동시에 실행되지 않는 작업들을 좀 더 효율적으로 처리하는 프로그래밍 방식
// 프로그램의 실행 흐름을 방해하지 않고 백그라운드에서 특정 작업을 수행하는 개념
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promise - 비동기 작업을 위한 JS 객체
// resolve, reject
const sync = () => {
    console.log('동기 작업 완료');
};
const asyncFn = () => {
    return new Promise((resolve) => {
        resolve('비동기 작업 완료');
    });
};
function main() {
    sync();
    asyncFn().then((value) => console.log(value));
    sync();
    sync();
}
main();
// {
//   'server': 'https://api.somedomain.com',
//   'evg': 'prodection'
// }
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/api/config');
        const configData = yield response.json();
        return configData;
    });
}
function fetchData2(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // 로직 수행 (비동기)
        const success = true;
        if (success) {
            const data = {
                id: 1,
                name: 'test',
            };
            resolve(data);
        }
        else {
            reject('someting went wrong...');
        }
    });
};
fetchData()
    .then((data) => console.log(data)) // data의 타입은 string
    .catch((error) => console.error(error));
// async와 await
// 이 함수의 반환 타입: Promise<void>
// async function 함수_이름() {
//   // 비동기 로직
//   const data = await 비동기_함수();
// }
function doFetch() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchData();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
doFetch();
