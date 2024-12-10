"use strict";
// 타입 단언 (Type Assertion)
// 표현식 as 지정할 타입
const someValue = 'He there';
// const len = someValue.length // ts error ('someValue' is of type 'unknown'.)
const len = someValue.length; // ok
// getElementById라는 메서드가 반환하는 타입이 HTMLElement임.
const button = document.getElementById('button'); // button 타입 추론: HTMLElement | null
// button element에는 실제로 disabled라는 속성이 존재하지만, 에러가 뜬다.
// 타입 시스템에서 기본적으로 제공하는 HTMLElement 타입에 존재하지 않는 것.
// button.disabled = true; // ts error (Property 'disabled' does not exist on type 'HTMLElement'.)
// 그래서 이럴 때 타입 단언을 자주 사용한다.
// 개발자가 이 element의 타입에 대해 더 잘 알고 있는 경우에 사용
const button2 = document.getElementById('button');
// 주의할 점은, 만약 html에 button이 실제로는 없다면, null 값이 반환된다.
// 그래서 다음처럼 button의 존재 여부를 항상 확인하는 것이 좋다.
if (button instanceof HTMLButtonElement) {
    button2.disabled = true;
}
// 또는
if (button) {
    button2.disabled = true; // ok
}
