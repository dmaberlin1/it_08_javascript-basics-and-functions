/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const [hoursX, minutesX, secondsX] = x.split(':').map(Number);
    const [hoursY, minutesY, secondsY] = y.split(':').map(Number);
    const totalSecondsX = hoursX * 3600 + minutesX * 60 + secondsX;
    const totalSecondsY = hoursY * 3600 + minutesY * 60 + secondsY;

    return totalSecondsY - totalSecondsX;

    // Эта реализация использует метод split(':'), чтобы разбить строки x и y на массивы, и преобразует элементы массивов в числа с помощью map(Number).
    // Дальше время каждого момента выражается в секундах (totalSecondsX и totalSecondsY)  преобразовануем часы, минуты и секунды в секунды и суммируем их.
    // В итоге возвращается разница между timeY и timeX, представляющая разницу в секундах между двумя моментами времени.
}

module.exports = getTimeDelta;
