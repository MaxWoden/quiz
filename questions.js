const questions = [
    {
        question: "Какой правильный синтаксис JavaScript для изменения содержимого HTML-элемента>?",
        code: `<p id="demo">This is a demonstration.</p>`,
        answer: "document.getElementById('demo').innerHTML = 'Hello World!'",
        options:[
            "document.getElement('h1').textbox = 'Hello World!'",
            "#demo.innerHTML = 'Hello World!'",
            "document.getElementById('demo').innerHTML = 'Hello World!'",
            "document.querySelector('.demo').textbox = 'Hello World!'",
        ]
    },
    {
        question: "В каком варианте результат равен true?",
        answer: "null == undefined",
        options:[
            "'' == '0'",
            "null == undefined",
            "false == undefined",
            "false == null"
        ]
    },
    {
        question: "Как округлить число 15.45 в большую сторону?",
        answer: "Math.ceil(15.45)",
        options:[
            "Math.ceil(15.45)",
            "round(15.45)",
            "Math.floor(15.45)",
            "Math.round(15.45)"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code:`
let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
        `,
        answer: "undefined",
        options:[
            "1",
            "2",
            "9",
            "undefined"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(typeof NaN);`,
        answer: "number",
        options:[
            "Nan",
            "undefined",
            "null",
            "number"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(3 > 2 > 1);`,
        answer: "false",
        options:[
            "true",
            "false",
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(1 +  "2" + "2");`,
        answer: "122",
        options:[
            "122",
            "32",
            "Nan2",
            "Nan"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());`,
        answer: "banana",
        options:[
            "bananaa",
            "baa",
            "banana",
            "ananas"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(018 - 015);`,
        answer: "5",
        options:[
            "Nan",
            "3",
            "5",
            "13"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(typeof typeof 1);`,
        answer: "string",
        options:[
            "string",
            "number",
            "1",
            "true"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `
const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);`,
        answer: "0",
        options:[
            "0",
            "'true'",
            "1",
            "true"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(false == '0');`,
        answer: "true",
        options:[
            "true",
            "false"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `
const numbers = [33, 2, 8]; 
numbers.sort();
console.log(numbers[1]);
        `,
        answer: "33",
        options:[
            "33",
            "2",
            "8",
            "1"
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log(0.1 + 0.2 == 0.3);`,
        answer: "false",
        options:[
            "true",
            "false",
        ]
    },
    {
        question: "Что выведет следующий код?",
        code: `console.log("This is a string." instanceof String);`,
        answer: "false",
        options:[
            "true",
            "false",
        ]
    },
]































