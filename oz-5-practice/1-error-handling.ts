// try {
//   // 에러가 발생할 수도 있는 코드
//   // fn() -> throw new Error('something went wrong..') -> 이 Error instance가 catch 블록으로 전달됨
// } catch (error) {
//   console.error(error.message); // 에러 속성에 접근 가능
// } finally {
//   // 에러에 상관 없이 항상 실행
// }

function checkPositiveNumber(num: number) {
  if (num < 0) {
    // 예외 발생
    throw new Error('number should be positive'); // 함수의 실행 흐름이 바로 중단되고, 가장 가까운 try-catch 구문으로 제어가 이동된다.
  }

  console.log(`${num} is a positive number`);
}

try {
  checkPositiveNumber(10);
  checkPositiveNumber(-10);
} catch (error: unknown) {
  // erorr의 타입에 any를 사용하면 타입 검사 없이 바로 error.message에 접근 가능
  // unknown을 사용하면 명시적인 타입 검사를 해야 한다(그게 요구사항이 됨)
  // unknown을 사용하고 catch문 안에서 if문을 통해 명시적으로 error의 타입 검사를 해주는 것이 좋다.
  if (error instanceof Error) {
    console.log(error.message);
  }
}

/* -------- 사용자 정의 에러 타입 만들고 사용하기 -------- */

class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('custom error...');
} catch (error: unknown) {
  if (error instanceof CustomError) {
    console.log(error.message);
  }
}
