/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    const words = value.split(' ');
    const anagramWords = [];

    function isAnagram(x, y) {
        if (x.length !== y.length) {
            return false;
        }

        const sortedX = x.toLowerCase().split('').sort().join('');
        const sortedY = y.toLowerCase().split('').sort().join('');

        return sortedX === sortedY;
    }

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        let isCurrentWordAnagram = false;

        for (let j = 0; j < words.length; j++) {
            if (i !== j && isAnagram(currentWord, words[j])) {
                isCurrentWordAnagram = true;
                break;
            }
        }

        if (isCurrentWordAnagram && !anagramWords.includes(currentWord)) {
            anagramWords.push(currentWord);
        }
    }

    return anagramWords.join(' ');
}




module.exports = searchAnagrams;
