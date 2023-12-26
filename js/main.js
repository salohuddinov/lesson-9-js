// OBJECT1.

// const person = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// console.log(`firstName: ${person.firstName}`);
// console.log(`lastName: ${person.lastName}`);
// console.log(`age: ${person.age}`);
// console.log(`languages: ${person.languages.join(',')}`);
// console.log(`friends: ${person.friends.join('+')}`);


// OBJECT2.

// function kvadratObj(n) {
//     let result = {};

//     for (let i = 1; i <= n; i++) {
//         result[i] = i * i;
//     }

//     return result;
// }

// let inputN = 5;
// let natija = kvadratObj(inputN);

// console.log(natija);


// OBJECT3.

// let misolObj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// let kalitlar = Object.keys(misolObj);
// let qiymatlar = Object.values(misolObj);

// let yigindisi = 0;

// for (let i = 0; i < kalitlar.length; i++) {
//     yigindisi += parseInt(kalitlar[i]) + parseInt(qiymatlar[i]);
// }

// console.log("Yig'indisi:", yigindisi);


// OBJECT4.

// let inputMassiv = ["Abdulaziz", "Safarmurod", "Orol", "Jahongir"];
// let natijaObj = {};

// for (let i = 0; i < inputMassiv.length; i++) {
//     let kalit = inputMassiv[i];
//     let qiymat = kalit.length;

//     natijaObj[kalit] = qiymat;
// }

// console.log(natijaObj);


// OBJECT5.

// let mahsulotlarObj = {
//     "Apelsin": 10000,
//     "Olma": 12000,
//     "Mandarin": 8000,
//     "Banan": 20000
// };

// let qiymatlar = Object.values(mahsulotlarObj);
// let mahsulotlarSoni = qiymatlar.reduce(function (acc, qiymat) {
//     return acc + qiymat;
// }, 0);

// console.log("Soni:", mahsulotlarSoni);


// OBJECT6.

// function defineObject(obj) {
//     let kalitlar = Object.keys(obj);

//     for (let i = 0; i < kalitlar.length; i++) {
//         if ( kalitlar[i] !== 'string') {
//             return false;
//         }
//     }

//     return true;
// }

// let inputObj = { abc: 1, 123: 2, d: 5 };
// let natija = defineObject(inputObj);

// console.log(natija);


// OBJECT7.

// function ochirFalsylar(obj) {
// let natijaObj = {};

// for (let kalit in obj) {
//     if (obj[kalit]) {
//         natijaObj[kalit] = obj[kalit];
//     }
// }

// return natijaObj;
// }

// var inputObj = { a: false, b: 12, c: true, d: 0 };
// var natija = ochirFalsylar(inputObj);

// console.log(natija);


// OBJECT8.

// function hisoblashMassiv(arr) {
//     let natijaObj = {};

//     for (let i = 0; i < arr.length; i++) {
//         let son = arr[i];

//         if (!(son in natijaObj)) {
//             natijaObj[son] = 1;
//         } else {
//             natijaObj[son]++;
//         }
//     }

//     return natijaObj;
// }

// let inputMassiv = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// let natija = hisoblashMassiv(inputMassiv);

// console.log(natija);


// OBJECT9.

// function hisoblashSoni(son) {
//     let sonStr = son.toString();

//     let natijaObj = {
//         trilionlar: parseInt(sonStr.slice(-1)),
//         milliardlar: parseInt(sonStr.slice(-3, -1)),
//         millionlar: parseInt(sonStr.slice(-6, -3)),
//         minglar: parseInt(sonStr.slice(-9, -6)),
//         birlar: parseInt(sonStr.slice(-12, -9))
//     };

//     return natijaObj;
// }

// let inputSon = 8945472985629;
// let natija = hisoblashSoni(inputSon);

// console.log(natija);


// OBJECT10.

// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         alreadyRead: false,
//     },
//     {
//         title: "Dunyo ishlari",
//         author: "O'tkir Hoshimov",
//         alreadyRead: true,
//     },
//     {
//         title: "Vaqtning qadri",
//         author: "Abdulfattoh Abu G'udda",
//         alreadyRead: false,
//     },
// ];

// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
// }


// OBJECT11.

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let umumiySumma = 0;

// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const chegirma = (product.price * product.discount) / 100;
//     const umumiyNarx = (product.price - chegirma) * product.quantity;
//     umumiySumma += umumiyNarx;
// }

// console.log("Umumiy summa:", umumiySumma);


// OBJECT12.

// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
// };

// const massiv = [];

// for (const kalit in obj) {
//     massiv.push(kalit, obj[kalit]);
// }

// console.log(massiv);


// OBJECT13.

// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function hisoblashGPA(grades) {
//     let umumiyNumerator = 0;

//     for (let i = 0; i < grades.length; i++) {
//         const grade = grades[i];
//         umumiyNumerator += grade.grade * grade.kredit;
//         umumiyDenominator += grade.kredit;
//     }

//     const GPA = umumiyNumerator / umumiyDenominator;
//     return GPA;
// }

// const talabaGPA = hisoblashGPA(grades);
// console.log("Talaba GPA si:", talabaGPA);


// OBJECT14.

// OBJECT15.

// function getMultipleValues(n, obj) {
//     const res = {};

//     for (const kalit in obj) {
//         res[kalit] = obj[kalit] * n;
//     }

//     return res;
// }

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// const res = getMultipleValues(n, obj);

// console.log(res);


// OBJECT16.

// const product = {
//     name: "Iphone 14",
//     company: {
//         name: "Apple",
//         price: "200 mlrd",
//         founder: {
//             firstName: "Steve",
//             lastName: "Jobs",
//             birthDate: 1950,
//         },
//     },
// };

// const { name, company: { name: companyName, price, founder: { firstName, lastName, birthDate } } } = product;

// console.log("Product name:", name);
// console.log("Company name:", companyName);
// console.log("Price:", price);
// console.log("Founder:", firstName, lastName);
// console.log("Birth Date:", birthDate);


// OBJECT17.

// const students = [
//     { name: "John", percent: 80 },
//     { name: "Jane", percent: 75 },
//     { name: "Bob", percent: 90 },
// ];

// const totalStudents = students.length;
// const totalPercent = students.reduce((sum, student) => sum + student.percent, 0);
// const averagePercent = totalPercent / totalStudents;

// console.log("O'quvchilar umumiy protsent o'rtachasi:",);

// const studentsWithInfo = students.map(student => ({
//     passed: student.percent >= 60,
//     grade: student.percent >= 90 ? "A" : student.percent >= 80 ? "B" : "C",
// }));

// console.log("O'quvchilar yangi objectlari:", studentsWithInfo);


// OBJECT18.

// const students = [
//     { name: "John", percent: 80 },
//     { name: "Jane", percent: 75 },
//     { name: "Bob", percent: 90 },
// ];

// const studentsWithInfo = students.map(student => {
//     const percent = student.percent;
//     let grade;

//     if (percent >= 90 && percent <= 100) {
//         grade = 5;
//     } else if (percent >= 80 && percent < 90) {
//         grade = 4;
//     } else if (percent >= 70 && percent < 80) {
//         grade = 3;
//     } else {
//         grade = 2;
//     }

//     return {
//         ...student,
//         passed: percent >= 60,
//     };
// });

// console.log("O'quvchilar yangi objectlari:", studentsWithInfo);


// OBJECT19.

// const students = [
//     { name: "John", percent: 80 },
//     { name: "Jane", percent: 75 },
//     { name: "Bob", percent: 90 },
// ];

// const studentsWithInfo = students.map(student => {
//     const percent = student.percent;
//     let grade;

//     if (percent >= 90 && percent <= 100) {
//         grade = 5;
//     } else if (percent >= 80 && percent < 90) {
//         grade = 4;
//     } else if (percent >= 70 && percent < 80) {
//         grade = 3;
//     } else {
//         grade = 2;
//     }

//     return {
//         ...student,
//         isPassed: percent >= 70 && percent <= 100,
//         grade: grade,
//     };
// });

// console.log("O'quvchilar yangi objectlari:", studentsWithInfo);


// OBJECT20.

const pupils = [
    {
        name: "Elbek",
        percent: 95,
    },
    {
        name: "Zafar",
        percent: 78,
    },
    {
        name: "Aziz",
        percent: 83,
    },
    {
        name: "Jasur",
        percent: 88,
    },
    {
        name: "Bobur",
        percent: 66,
    },
    {
        name: "Kamron",
        percent: 75,
    },
];

const passedCount = pupils.filter(student => student.percent >= 70).length;
const failedCount = pupils.length - passedCount;

console.log("O'tgan kishilar soni:", passedCount);
console.log("O'tmagan kishilar soni:", failedCount);


