/* ------------- typeof ------------- */
typeof 'string';
typeof 'number';

type Id = number | string;

let id: Id = 1;

if (typeof id === 'string') {
  // 문자열 ID인 경우 로직 처리
}

function getId(id: Id) {
  if (typeof id === 'number') {
    return id;
  }

  return Number(id);
}

getId(1);
getId('1');

/* ------------- 동일성/동등성 좁히기 (equality narrowing) ------------- */
// typeof처럼 타입을 확인하는 게 아니라 값이 동일한지, 값이 특정 조건에 부합하는지 확인하는 패턴
type Option = 'on' | 'off';

function power(option: Option) {
  if (option === 'off') {
    console.log('power off');
  } else {
    console.log('power on');
  }
}

power('on');
power('off');

/* ------------- in 키워드 사용 ------------- */
type iOS = { iMessage: () => void };
type android = { message: () => void };

function sendMessage(os: iOS | android) {
  if ('iMessage' in os) {
    os.iMessage(); // iOS로 좁혀진다
  } else {
    os.message(); // android 케이스
  }
}

// iOS 타입
sendMessage({
  iMessage: () => {
    console.log('sending iMessage');
  },
});
// android 타입
sendMessage({
  message: () => {
    console.log('sending message');
  },
});

/* ------------- instanceof narrowing ------------- */
class ApiResponse {
  data: any;
}
class ErrorResponse {
  message: string | undefined;
}

async function handleApiResponse(response: any) {
  if (response instanceof ApiResponse) {
    // 데이터 처리
  } else if (response instanceof ErrorResponse) {
    // 에러 처리
  }
}

const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();

handleApiResponse(apiResponse);
handleApiResponse(errorResponse);

/* ------------- 타입 가드 (type predicates/타입 서술어) ------------- */
// response is ErrorResponse의 의미:
// - 이 함수가 true를 반환하면 -> 매개변수 response가 ErrorResponse 타입이다
// - 이 함수가 false를 반환하면 -> 매개변수 response가 ErrorResponse 타입이 아니다
function isErrorResponse(response: ApiResponse | ErrorResponse): response is ErrorResponse {
  return (response as ErrorResponse).message !== undefined;
}

const response = { message: 'error..' };

if (isErrorResponse(response)) {
  // 에러 케이스
  console.log(response.message); // TypeScript는 이 블록 안에서 response가 ErrorResponse 타입임을 안다
}

// is를 사용하지 않은 경우
function checkIsErrorResponse(response: ApiResponse | ErrorResponse): boolean {
  return (response as ErrorResponse).message !== undefined;
}

if (checkIsErrorResponse(response)) {
  // 에러! TypeScript는 여기서 response의 타입을 확신할 수 없음
  console.log(response.message); // Error: Property 'message' might not exist
}

/* ------------- 식별 가능한 유니언 타입 (discriminated union) ------------- */
type SuccessResponse = {
  type: 'success';
  data: any;
};

type ErrorResponseType = {
  type: 'error';
  message: string;
};

type ApiResponseType = SuccessResponse | ErrorResponseType;

function handleResponse(response: ApiResponseType) {
  if (response.type === 'success') {
    console.log('data:', response.data);
  } else {
    console.log(response.message);
  }
}
