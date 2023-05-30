/**
 *
 * Петя, Катя и Сережа делают из бумаги журавликов.
 * Вместе они сделали X журавликов. Сколько журавликов сделал каждый ребенок, если известно,
 * что Петя и Сережа сделали одинаковое количество журавликов,
 * а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
 * * (если это возможно, если нет, то у Кати должно быть журавликов минимум в 2 раза больше, и максимально возможное для пети и серёжи. и всё остальное записать Кате
 * Напишите функцию computeOrizurus(total) которая вычислит
 * сколько журавликов сделал каждый ребенок.
 *
 * Пример:
 *
 * computeOrizurus(6) === [1, 4, 1]
 * computeOrizurus(24) === [4, 16, 4]
 * computeOrizurus(11) === [1, 9, 1]
 *
 * @param {number} total общее количество сделанных журавликов
 * @returns {number[]} массив чисел, где первый элемент это количество журавликов сделанных Петей,
 * второй элемент – Катей, третий – Сережей
 */
// function computeOrizurus(total) {
//     const katya =(total / 3) * 2 // Количество журавликов, сделанных Катей
//     const petyaSereja = (total/3)/2 // Количество журавликов, сделанных Петей и Сережей
//
//     return [petyaSereja, katya, petyaSereja];
// }

function computeOrizurus(total) {

    if(total%2===0){
        const girl =(total / 3) * 2 // Количество журавликов, сделанных Катей
        const boys = (total/3)/2 // Количество журавликов, сделанных Петей и Сережей

        return [boys, girl, boys];
    }
    else{
        let boys = Math.floor(total / 4); // Количество журавликов, сделанных Петей и Сережей
        let girl=(boys+boys)*2
        let testSum=(boys+boys)*2+(boys+boys)
        if(testSum>total){
            boys=boys-1
            girl=girl+1
        }
        return [boys, girl, boys];

    }
}

module.exports = computeOrizurus;

//
// let boys=Math.floor(11/4)
// testSum=(boys+boys)*2+(boys+boys)
// girl=(boys+boys)*2
// if(testSum>11){
//     boys=boys-1
//     girl=girl+1
// }
//
// console.log(testSum)
// console.log(boys)
// console.log(girl)
