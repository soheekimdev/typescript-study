// JS에서 제공되는 모든 DOM API를 그대로 사용
// 타입 정의 파일 제공 'lib.dom.d.ts'

// HTMLElement: 가장 기본적인 HTML 요소를 제공하는 인터페이스

// <a id="myLink" href="https://google.com">google</a>

// getElementById 메서드의 반환값: HTMLElement | null => as 키워드로 명시적으로 타입 단언을 해준다.
const link1 = document.getElementById('myLInk') as HTMLAnchorElement;
// querySelector 메서드의 반환값: Element | null => as 키워드로 명시적으로 타입 단언을 해준다.
const link2 = document.querySelector('#myLink') as HTMLAnchorElement;

// if (link1 instanceof HTMLAnchorElement) {
//   link1.href = '';
// }
// if (link2) {
//   link2.href = '';
// }

link1.href = '';
link2.href = '';

/* ----------------- */

const p = document.createElement('p'); // HTMLParagraphElement
const img = document.createElement('img'); // HTMLImageElement
img.src = ''; // ok

const anchor = document.createElement('a'); // HTMLAnchorElement
anchor.href = '';

const div = document.querySelector('div'); // HTMLDivElement | null

const buttons = document.querySelectorAll('button'); // NodeListOf<HTMLButtonElement>
buttons.forEach((button) => {
  // button type: HTMLButtonElement
  button.click();
});

/* ----------------- event ----------------- */
// <div id="myDiv"></div>
const myDiv = document.getElementById('myDiv');

// 기본적인 e type: MouseEvent인데 콜론(:) 쓰고 지정해줌
// myDiv?.addEventListener('click', (e: MouseEvent | KeyboardEvent) => {
myDiv?.addEventListener('click', (e: Event) => {
  // mouse event
  if (e instanceof MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
  }

  // keyboard event
  if (e instanceof KeyboardEvent) {
    console.log(e.code);
  }
});
