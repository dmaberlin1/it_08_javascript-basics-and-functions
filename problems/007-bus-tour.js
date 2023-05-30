/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {
    const busHeight=512;
    const index = bridges.findIndex((bridge) => bridge <= busHeight);
    // findIndex() используем для поиска индекса первого моста, у которого высота меньше или равна высоте автобуса.
    // Если такой мост найден, возвращается его номер (индекс + 1).
    // В противном случае возвращается undefined.
    return index !== -1 ? index + 1 : undefined;
}

module.exports = checkBusTour;
