// 객체에 상수 단언 사용
// const objName = {} as const;

// 배열에 상수 단언 사용
// const arrName = [] as const;

const book = {
  title: 'TypeScript Guide',
  author: 'hongsam kim',
} as const;

// book.title = 'another title' // ts error

const nums = [1, 2, 3, 4, 5] as const;

// nums.push(6) // ts error

const config = {
  server: 'https://api.somedomain.com',
  port: 8080,
  version: 2,
} as const;

// config.server = 'https://...' // ts error

// 주문 시스템의 상태 정보
export const statusCodeMap = {
  101: 'ordred',
  102: 'pending',
  103: 'completed',
} as const; // as const를 붙이면 넘버들이 readonly가 되고, 값들이 리터럴로 변환됨(string -> 'ordered'...)

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
  const message = statusCodeMap[statusCode];

  // UI 업데이트 또는 로직 처리
}
