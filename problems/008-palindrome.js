/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    const reversedValue = value.split('').reverse().join('');
    return value === reversedValue;

    //     Строка value разбивается на массив символов с помощью метода split('').
    //     Массив символов переворачивается в обратном порядке с помощью метода reverse().
    //     Обратный массив символов объединяется обратно в строку с помощью метода join('').
    //     Полученная перевернутая строка сравнивается с исходной строкой value.
    //     Если перевернутая строка и исходная строка value идентичны, то функция возвращает true, иначе false.
   // Таким образом, функция isPalindrome определяет, является ли переданная строка палиндромом, проверяя, равны ли исходная строка и ее перевернутая версия.
}

module.exports = isPalindrome;
