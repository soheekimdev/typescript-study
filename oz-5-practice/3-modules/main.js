"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import add from './utils';
const utils_1 = require("./utils");
console.log(utils_1.appName);
const user = new utils_1.User('John');
(0, utils_1.log)(user.getName());
const student = {
    id: 123,
    name: 'Jess',
    age: 18,
};
function createStudentProfile(profile) {
    console.log(`${profile.studentId}, ${profile.photoUrl}`);
}
createStudentProfile({
    studentId: student.id,
    photoUrl: 'https://somephotourl.png',
});
