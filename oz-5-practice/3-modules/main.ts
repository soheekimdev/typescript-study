// import add from './utils';
import { log as Logger, appName, User } from './utils';
import { Student, StudentProfile } from './student';

console.log(appName);

const user = new User('John');

Logger(user.getName());

const student: Student = {
  id: 123,
  name: 'Jess',
  age: 18,
};

function createStudentProfile(profile: StudentProfile) {
  console.log(`${profile.studentId}, ${profile.photoUrl}`);
}

createStudentProfile({
  studentId: student.id,
  photoUrl: 'https://somephotourl.png',
});
