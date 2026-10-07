// פונקציה שמקבלת שם משתמש ומחזירה שלום למשתמש
// אחרי מספר שניות שקיבלה כפרמטר

const helloAfterBad = (seconds, username) => {
    setTimeout(() => {
        // console.log(`hello ${username}`);
        return `hello ${username}`;
    }, seconds * 1000);
};

// הודפס אנדיפיינד מיד כי
// 1. ההדפסה סינכרונית, והפונקציה החזירה ערך רק לאחר זמן
// 2. helloAfter ולא ל setTimeout הערך חזר ל
// console.log(helloAfterBad(2, 'sari'));
// console.log(helloAfterBad(1, 'riki'));


// promise - הבטחה
const helloAfterGood = (seconds, username) => {
    // פונקציות שיכולות להחזיר ערך לאחר זמן
    // resolve - return במקום
    // reject  - throw  במקום
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === '') {
                reject('invalid username');
            } else {
                resolve(`hello ${username}`);
            }
        }, seconds * 1000);
    });
};

// console.log(helloAfterGood(1, 'riki')); // promise

// שימוש בפונקציה שמחזירה ערך לאחר זמן
//#region 1. then ,catch
// יתרון: אסינכרוני
// חסרון: לא נח למעקב, קינון של פונקצות
/*
helloAfterGood(2, 'sari')
    .then(val => {
        // resolve לכאן מגיע אחרי שהחזיר תשובה עם
        // fulfilled הפרומיס במצב של
        console.log('success 1');
        console.log(val);
    })
    .catch(err => {
        // rejetc לכאן מגיע אחרי שהחזיר שגיאה עם
        // rejected הפרומיס במצב של
        console.log(`ERROR: ${err}`)
    })
    .finally(() => console.log('After 2 seconds'));

helloAfterGood(1, '')
    .then(val => {
        console.log('success 2');
        console.log(val);
    })
    .catch(err => console.log(`ERROR: ${err}`));
    */
//#endregion


//#region 2. async-await
// יתרון: אסינכרוני עם תחביר שדומה לסינכרוני
async function main() {
    // "מה שבתוך הפונקציה יבצע בצורה "סינכרונית
    // await - ימתין לשורה הבאה
    try {
        console.log(await helloAfterGood(2, 'sari'))
        console.log(await helloAfterGood(1, ''))
        console.log(await helloAfterGood(1, 'riki'))
    } catch (error) {
        console.log(error);        
    }
}

// יבצע במקביל בצורה אסינכרונית
main();
main();
main();
//#endregion