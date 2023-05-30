/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let totalTeam1 = 0;
    let totalTeam2 = 0;

    //проходим циклом по каждой четверти и вычисляем общее количество очков каждом team
    for(let i=0;i<points.length;i++){
        let quarterPoints=points[i].split('-') //разделаем строку на два элемента массива
        let team1Points=parseInt(quarterPoints[0],10);// Количество очков команды 1 в четверти
        let team2Points=parseInt(quarterPoints[1],10);
        //10 указывает на использование десятичной системы счисления при преобразовании строки в число.
        //Если параметр не указан, то по умолчанию используется основание 10.
        totalTeam1+=team1Points;
        totalTeam2+=team2Points;
    }

    if(totalTeam1>totalTeam2) return 1;
    else if(totalTeam1<totalTeam2)return 2;
    else return undefined

}

module.exports = getWinner;


