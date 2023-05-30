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
            // Если текущий символ равен следующему символу
            count++; // Увеличиваем счетчик
        } else {
            if (count > 1) {
                // Если количество повторений больше 1
                compressed += count + value[i]; // Добавляем сжатое представление в compressed
            } else {
                // Если количество повторений равно 1
                compressed += value[i]; // Добавляем текущий символ в compressed
            }
            count = 1; // Сбрасываем счетчик обратно в 1
        }
    }

    return compressed;
}

module.exports = rle;
