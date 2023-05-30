/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 * регистр букв при этом игнорируется.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {

    // Если одна из строк пустая, возвращаем false
    if (x === '' || y === '') {
        return false;
    }
    // Приводим строки к нижнему регистру и удаляем пробелы
    x = x.toLowerCase().replace(/\s/g, '');
    y = y.toLowerCase().replace(/\s/g, '');

    // Сортируем символы в строках
    const sortedX = x.split('').sort().join('');
    const sortedY = y.split('').sort().join('');

    // Сравниваем отсортированные строки
    // return x !== y && sortedX === sortedY;
    return sortedX===sortedY
}

module.exports = anagram;
