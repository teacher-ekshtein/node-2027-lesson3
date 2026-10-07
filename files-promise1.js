// פונקציות לטיפול בקבצים ע"י פרומיס
const { readFile, appendFile } = require('node:fs/promises');

const fileDB = './users.txt';

const addUser = (username, password) => {
    appendFile(fileDB, `${username} ${password}\r\n`)
        .then(() => console.log(username, 'success'))
        .catch(() => console.log(username, 'failed'))
        .finally(() => getUsersCount());
};

const getUsersCount = () => {
    readFile(fileDB, 'utf-8')
        .then((data1) => console.log(data1.split('\r\n').filter(x => x !== '').length)) // אם הצלחת לקרוא את הקובץ
        .catch(e => console.log(e.message));
};

getUsersCount(); // 2.
const [, , name, pass] = process.argv;
addUser(name, pass); // 6.
addUser('*'.repeat(1000), pass); // 5.
addUser('#', pass); // 4.
getUsersCount(); // 3.

console.log('end'); // 1. סינכרוני