/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    // Преобразование строк временных моментов в объекты Date
    const formattedList = list.map(time => {
        const [hours, minutes, seconds] = time.split(':');
        return new Date(0, 0, 0, hours, minutes, seconds);
    });
    // Сортировка массива объектов Date по возрастанию
    formattedList.sort((a, b) => a - b);
    // Преобразование объектов Date обратно в строки временного формата 'HH:MM:SS'
    const sortedList = formattedList.map(time => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    });

    return sortedList;

}

module.exports = sortTimestamps;
