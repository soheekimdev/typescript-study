"use strict";
/*
1. 배열 타입
  책의 제목을 담고 있는 배열을 생성하세요.
  배열에는 최소 5개의 책 제목을 포함시키세요.

2. 객체 타입
  책을 나타내는 객체 타입(Book)을 정의하세요.
  책 객체는 title, author, publicationYear, isAvailable 속성을 가져야 합니다.
  책 객체의 예시 데이터를 하나 만드세요.

3. 함수 타입
책의 가용성을 변경하는 함수 타입(UpdateAvailability)을 정의하세요.
함수는 책 객체와 새로운 가용성 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
함수의 예시 구현을 작성하세요.

4. 유니언 타입
  책의 상태를 나타내는 유니언 타입(BookStatus)을 정의하세요. 상태는 "available", "checked out", "reserved" 세 가지로 한정합니다.
  책 상태를 변경하는 함수를 작성하세요. 함수는 책 객체와 새로운 상태를 매개변수로 받아서 책의 가용성 상태를 업데이트해야 합니다.
  함수의 예시 구현을 작성하세요.

5. 인터페이스
  도서관 시스템을 위한 인터페이스(Library)를 정의하세요. 이 인터페이스는 다음 메서드를 포함해야 합니다:
  books: Book 객체의 배열
  addBook: 책을 추가하는 메서드
  removeBook: 책을 제거하는 메서드
  인터페이스를 구현하는 예시 코드를 작성하세요.

6. 튜플
  책의 제목과 저자를 담고 있는 튜플(BookInfo)을 정의하세요.
  튜플의 예시 데이터를 하나 만드세요.

7. 열거형
  책의 장르를 나타내는 열거형(Genre)을 정의하세요.
  Genre는 Fiction, NonFiction, Fantasy, Biography, ScienceFiction, Romance 여섯 가지 값을 가집니다.
  Book 타입을 확장하여 DetailedBook 타입을 정의하세요. 이 타입은 기존 Book 타입에 genre 속성을 추가로 가져야 합니다.
  DetailedBook 객체의 예시 데이터를 하나 만드세요. */
//1. 배열 타입
const bookTitles = ['title1', 'title2', 'title3', 'title4', 'title5'];
const book = {
    title: 'title',
    author: 'author',
    publicationyear: 2024,
    isAvailable: true,
};
const updateAvailability = (book, newAvailability) => {
    book.isAvailable = newAvailability;
};
updateAvailability(book, false);
function updateBookStatus(book, newStatus) {
    book.isAvailable = newStatus;
}
updateBookStatus(book, true);
const library = {
    books: [],
    addBook(book) {
        this.books.push(book);
    },
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    },
};
const bookInfos = [
    ['title1', 'author1'],
    ['title2', 'author2'],
];
function addBookInfo(bookInfo) {
    bookInfos.push(bookInfo);
}
addBookInfo(['title3', 'author3']);
// 7. 열거형
var Genre;
(function (Genre) {
    Genre["Fiction"] = "FICTION";
    Genre["NonFiction"] = "NONFICTION";
    Genre["Fantasy"] = "FANTASY";
    Genre["Biography"] = "BIOGRAPHY";
    Genre["ScienceFiction"] = "SCIENCEFICTION";
    Genre["Romance"] = "ROMANCE";
})(Genre || (Genre = {}));
const detailedBook = {
    title: 'title',
    author: 'author',
    publicationyear: 1234,
    isAvailable: true,
    genre: Genre.Fantasy,
};
