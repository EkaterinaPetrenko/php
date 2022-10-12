const topValue = 999;
const botValue = -999;
var curNumber = 0;
var minValue = parseInt(prompt(`Минимальное значение числа для игры от ${botValue} до ${topValue}`,`0`)) || 0;
if (minValue > topValue || minValue < botValue) {
    minValue = (minValue > topValue) ? topValue : botValue;
} 
var maxValue = parseInt(prompt(`Максимальное значение числа для игры от ${minValue} до ${topValue}`,'100')) || 100;
if (maxValue > topValue || maxValue < botValue) {
    maxValue = (maxValue > topValue) ? topValue : botValue;
} 
/* Проверка корректности введенного диапазона. Если максимальное значение числа меньше минимального, 
то за максимальное принимается значение topValue*/
if (minValue > maxValue) {
    maxValue = topValue;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
var answerNumber  = Math.floor((minValue + maxValue) / 2);
var orderNumber = 1;
var gameRun = true;
var phraseRandom = 0;
var answerPhrase = "";
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

answerField.innerText = `Вы загадали число ` + numToText(answerNumber) + `?`;

/* Функция представления числа в текстовой форме */
function numToText(curNumber) {
    if (curNumber === 0) {
        return(`0`);
    }
    let curNumberSign = curNumber;
    let curText = curNumber > 0 ? `` : "минус ";
    curNumber = Math.abs(curNumber);
    if (curNumber > 99) {
        /* Формирование отображения сотен */
        switch (Math.floor(curNumber / 100)) {
            case 1:
                curText = curText + `сто`;
                break;
            case 2:
                curText = curText + `двести`;
                break;
            case 3:
                curText = curText + `триста`;
                break;
            case 4:
                curText = curText + `четыреста`;
                break;
            case 5:
                curText = curText + `пятьсот`;
                break;
            case 6:
                curText = curText + `шестьсот`;
                break;
            case 7:
                curText = curText + `семьсот`;
                break;
            case 8:
                curText = curText + `восемьсот`;
                break;
            case 9:
                curText = curText + `девятьсот`;
                break;
        }
    }
    let numTen = curNumber % 100;
    if ((numTen > 9) && (numTen < 20)) {
        /* Формирование отображения двузначного числа от 10 до 19 */
        switch (numTen) {
            case 10:
                curText = curText + ` десять`;
                break;
            case 11:
                curText = curText + ` одиннадцать`;
                break;
            case 12:
                curText = curText + ` двенадцать`;
                break;
            case 13:
                curText = curText + ` тринадцать`;
                break;
            case 14:
                curText = curText + ` четырнадцать`;
                break;
            case 15:
                curText = curText + ` пятнадцать`;
                break;
            case 16:
                curText = curText + ` шестнадцать`;
                break;
            case 17:
                curText = curText + ` семнадцать`;
                break;
            case 18:
                curText = curText + ` восемнадцать`;
                break;
            case 19:
                curText = curText + ` девятнадцать`;
                break;
        }
        } else {
            /* Формирование отображения десятков */
            switch (Math.floor(numTen / 10)) {
                case 0:
                    break;
                case 2:
                    curText = curText + ` двадцать`;
                    break;
                case 3:
                    curText = curText + ` тридцать`;
                    break;
                case 4:
                    curText = curText + ` сорок`;
                    break;
                case 5:
                    curText = curText + ` пятьдесят`;
                    break;
                case 6:
                    curText = curText + ` шестьдесят`;
                    break;
                case 7:
                    curText = curText + ` семьдесят`;
                    break;
                case 8:
                    curText = curText + ` восемьдесят`;
                    break;
                case 9:
                    curText = curText + ` девяносто`;
                    break;
            }
            switch (numTen % 10) {
                /* Формирование отображения единиц */
                case 0:
                    break;
                case 1:
                    curText = curText + ` один`;
                    break;
                case 2:
                    curText = curText + ` два`;
                    break;
                case 3:
                    curText = curText + ` три`;
                    break;
                case 4:
                    curText = curText + ` четыре`;
                    break;
                case 5:
                    curText = curText + ` пять`;
                    break;
                case 6:
                    curText = curText + ` шесть`;
                    break;
                case 7:
                    curText = curText + ` семь`;
                    break;
                case 8:
                    curText = curText + ` восемь`;
                    break;
                case 9:
                    curText = curText + ` девять`;
                    break;
            }
    }
    return (curText.length >= 20 ? String(curNumberSign) : curText);
}

/* Кнопка "Заново" */
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt(`Минимальное значение числа для игры от ${botValue} до ${topValue}`,'0')) || 0;
    if (minValue > topValue || minValue < botValue) {
        minValue = (minValue > topValue) ? topValue : botValue;
    } 
    maxValue = parseInt(prompt(`Максимальное значение числа для игры от ${minValue} до ${topValue}`,'100')) || 100;
    if (minValue > topValue || minValue < botValue) {
        minValue = (minValue > topValue) ? topValue : botValue;
    } 
    if (maxValue > topValue || maxValue < botValue) {
        maxValue = (maxValue > topValue) ? topValue : botValue;
    } 
    /* Проверка корректности введенного диапазона. Если максимальное значение числа меньше минимального, 
    то за максимальное принимается значение topValue*/
    if (minValue > maxValue) {
        maxValue = topValue;
    }

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    phraseRandom = Math.round( Math.random()*3);
    if (phraseRandom === 1) {
        answerPhrase = `Наверно, это число `;
    } else if (phraseRandom === 2) {
            answerPhrase = `Сейчас угадаю! Это число `;
    } else {
        answerPhrase = `Вы загадали число `;       
    }
    answerField.innerText = answerPhrase + numToText(answerNumber) + `?`;
})

/* Кнопка "Больше" */
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            phraseRandom = Math.round( Math.random());
            answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            if (phraseRandom === 1) {
                answerPhrase = `Наверно, это число `;
            } else if (phraseRandom === 2) {
                    answerPhrase = `Сейчас угадаю! Это число `;
            } else {
                answerPhrase = `Вы загадали число `;       
            }
            answerField.innerText = answerPhrase + numToText(answerNumber) + `?`;
        }
    }
})

/* Кнопка "Меньше" */
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round( Math.random()*3);
            if (phraseRandom === 1) {
                answerPhrase = `Наверно, это число `;
            } else if (phraseRandom === 2) {
                    answerPhrase = `Сейчас угадаю! Это число `;
            } else {
                answerPhrase = `Вы загадали число `;       
            }
            answerField.innerText = answerPhrase + numToText(answerNumber) + `?`;
        }
    }
})

/* Кнопка "Верно!" */
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round(Math.random()*3);
        if (phraseRandom === 1) {
            answerPhrase = `Ура! Я угадал!\n\u{1F60E}`;
        } else if (phraseRandom === 2) {
            answerPhrase = `Победа!\n\u{1F609}`;
        } else {
            answerPhrase = `Я всегда угадываю\n\u{1F60D}`; 
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

