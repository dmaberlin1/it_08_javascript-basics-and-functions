/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let power = 0;
    while (n > 1) {
        if (n % 2 !== 0) return undefined;
        n = n / 2;
        power++;
    }
    return power;
    // пока n>1 цикл крутиться
    // Если n является четным числом, мы делим его на 2 и увеличиваем значение power на 1.
    // Цикл продолжается до тех пор, пока n не станет равным 1.
    // В конце мы возвращаем значение power в качестве результата.
}

module.exports = getPower;
