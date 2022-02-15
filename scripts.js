/*Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

var str = 'aaa@bbb@ccc';
console.log(str.replace(/@/gi, '!'));


/*В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/
let data = '2025-12-31';
let datachange = data.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1'); 
let datachange2 = datachange.replace(/-/gi, '/');
document.write(datachange2);
document.write('<br>');
document.write('<br>');

/*Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

var str3 = 'Я учу javascript!';
document.write(str3.substring(2,6)); 
document.write(str3.substr(2,4));
document.write(str3.slice(2,6));
document.write(' ');
document.write(str3.substring(6,16)); 
document.write(' ');
document.write(str3.substr(6,10));
document.write(' ');
document.write(str3.slice(6,16));
document.write('<br>');



 /*Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/ 

var arr = [4, 2, 5, 19, 13, 0, 10]; 
let kvadr = 0;
let sum = 0;
for (i = 0; i < arr.length; i++) {
sum += Math.pow(arr[i], 3);   
kvadr = Math.sqrt(sum);
}
document.write(kvadr);
document.write('<br>');



/*Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/   

function plus (a, b) {
    let c;
    c = a - b;
    if (c < 0) {
        return Math.abs(c);
    }
    else {
        return c;
    }
}
document.write(plus (3, 5));
document.write('<br>');
document.write(plus (6, 1));
document.write('<br>');



/*Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/ 
let dateNow = new Date();
console.log(typeof(dateNow));
function getZero(numberone){
	if (numberone < 10) { 
		return '0' + numberone;
	} else {
		return numberone;
	}
}

document.write(getZero(dateNow.getHours()) + ':' + getZero(dateNow.getMinutes()) + ':' + getZero(dateNow.getSeconds()) + ' ' + getZero(dateNow.getDate()) + '.' + getZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear());

document.write('<br>');






/*Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/ 

let str5 = 'aa aba abba abbba abca abea';
;
console.log(str5.match(/ab+a/gi));





/*Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

function val(tel) {
    let reg = /[+]{0}[1-9]{3}\([0-9]{2}\)[1-9]{3}-[1-9]{2}-[1-9]{2}/g; 
    return reg.test(tel);
}
console.log(val('+375(29)124-17-67'));


/*Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов. Функция должна возвращать true или false. Используйте регулярные
выражения.*/ 

function val2(mail) {
    let email = /[A-Z0-9\_\.\-\]{2,}@[A-Z]{2,11}/gi;
    return email.test(mail);
}
console.log(val2('ybenedikt24@yandex.ru'));












/*Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.*/
