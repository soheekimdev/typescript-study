// 비동기 프로그래밍
// 동시에 실행되지 않는 작업들을 좀 더 효율적으로 처리하는 프로그래밍 방식
// 프로그램의 실행 흐름을 방해하지 않고 백그라운드에서 특정 작업을 수행하는 개념

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

// TS => Generic Promise
// Promise<T>
// Promise<string> // 문자열을 결과로 반환하는 비동기 연산
// Promise<number> // 숫자를 결과로 반환하는 비동기 연산

interface MyDataType {
  id: number;
  name: string;
}

type Config = Record<string, string>;

// {
//   'server': 'https://api.somedomain.com',
//   'evg': 'prodection'
// }

async function loadConfig(): Promise<Config> {
  const response = await fetch('/api/config');
  const configData: Config = await response.json();

  return configData;
}

async function fetchData2<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();

  return data as Promise<T>;
}

const fetchData = (): Promise<MyDataType> => {
  return new Promise((resolve, reject) => {
    // 로직 수행 (비동기)
    const success = true;
    if (success) {
      const data = {
        id: 1,
        name: 'test',
      };
      resolve(data);
    } else {
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

async function doFetch() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

doFetch();
