/**
 * Одной банки с краской хватает на покраску 16 квадратных метров стен офиса.
 *
 * Напишите функцию repair(width, length, height) вычисляющую минимальное количество банок краски,
 * необходимых для покраски стен в офисе. Размерами дверей и окон можно пренебречь.
 *
 * Пример:
 *
 * repair(1, 1, 3) === 1
 * repair(4, 4, 3) === 3
 * repair(4, 4, 4) === 4
 *
 * @param {number} width – ширина офиса
 * @param {number} length - длина офиса
 * @param {number} height - высота стен в офисе
 * @returns {number}
 */
function repair(width, length, height) {
    const squareMetersPerCan = 16; // Количество квадратных метров, которое можно покрасить одной банкой краски

    // Вычисляем общую площадь стен в офисе
    // Общая площадь всех четырех стен можно выразить как сумму площадей каждой стены. Площадь стены можно вычислить, умножив ее ширину на высоту.
    const totalArea = 2 * (width * height + length * height);

    // Вычисляем количество банок краски, необходимых для покраски стен
    const cansNeeded = Math.ceil(totalArea / squareMetersPerCan);

    return cansNeeded;
}

module.exports = repair;
