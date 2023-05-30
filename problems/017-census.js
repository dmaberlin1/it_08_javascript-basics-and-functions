/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    // Инициализация переменных для хранения информации о самом старшем мужском жителе
    let oldestMaleIndex = -1; // Индекс самого старшего мужского жителя в списке
    let maxAge = -1; // Максимальный возраст среди мужских жителей

    // Перебор всех жителей в списке
    for (let i = 0; i < list.length; i++) {
        const resident = list[i];

        // Проверка, является ли текущий житель мужского пола
        if (resident.gender === 'Male') {
            // Проверка возраста текущего жителя и обновление информации, если он старше
            if (resident.age > maxAge) {
                maxAge = resident.age;
                oldestMaleIndex = i;
            }
        }
    }

    // Возврат номера самого старшего мужского жителя или undefined, если такого жителя нет
    return oldestMaleIndex === -1 ? undefined : oldestMaleIndex + 1;
}

module.exports = census;
