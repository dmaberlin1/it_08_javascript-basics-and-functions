/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let compressed = '';
    let count = 1; // Счетчик для подсчета повторяющихся символов

    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i + 1]) {
            count++;
        } else {
            if (count > 1) {
                compressed += count + value[i];
            } else {
                compressed += value[i];
            }
            count = 1;
        }
    }

    return compressed;
}

module.exports = rle;
