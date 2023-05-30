/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *  если нет выводим порядковый номер числа в массиве
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;
    let count = 1; // Счетчик порядкового номера
    // Вычисление чисел Фибоначчи до достижения или превышения value
    while (b <= value) {
        if (b === value) {
            return count;
        }

        let next = a + b;
        a = b;
        b = next;
        count++;
    }
//. Если value соответствует числу Фибоначчи, функция возвращает count, в противном случае возвращается undefined
    return undefined;
}


module.exports = isFibonacci;
