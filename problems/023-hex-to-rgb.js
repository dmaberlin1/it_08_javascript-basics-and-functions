/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    // Удаляем символ # из строки цвета, если он присутствует
    color = color.replace('#', '');

    // Проверяем длину строки цвета, чтобы определить формат (сокращенный или полный)
    if (color.length === 3) {
        // Для сокращенного формата, удваиваем каждую цифру
        color = color.split('').map(c => c + c).join('');
    }

    // Извлекаем значения компонентов цвета (каждые две цифры)
    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);

    // Возвращаем строку в формате RGB
    return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = hexToRgb;
