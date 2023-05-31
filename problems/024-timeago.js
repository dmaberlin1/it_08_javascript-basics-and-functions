/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */

// function timeago(seconds) {
//     if (seconds < 0 || seconds >= 2419200) {
//         return 'undefined';
//     }
//
//     if (seconds < 10) {
//         return 'just now';
//     }
//
//     const intervals = [
//         { label: 'year', seconds: 31536000 },
//         { label: 'month', seconds: 2592000 },
//         { label: 'week', seconds: 604800 },
//         { label: 'day', seconds: 86400 },
//         { label: 'hour', seconds: 3600 },
//         { label: 'minute', seconds: 60 }
//     ];
//
//     let output = '';
//     let foundInterval = false;
//
//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         const count = Math.floor(seconds / interval.seconds);
//
//         if (count >= 1) {
//             if (count === 1 && interval.label === 'minute' && seconds < 120) {
//                 output += '1 minute ago';
//             } else {
//                 output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
//             }
//
//             seconds -= count * interval.seconds;
//             foundInterval = true;
//
//             if (seconds > 0) {
//                 output += ', ';
//             } else {
//                 break;
//             }
//         }
//     }
//
//     if (!foundInterval) {
//         output = 'just now';
//     }
//
//     // Удаление запятой в конце строки, если присутствует
//     if (output.endsWith(', ')) {
//         output = output.slice(0, -2);
//     }
//
//     return output;
// }

// function timeago(seconds) {
//     if (seconds < 0 || seconds >= 2419200) {
//         return 'undefined';
//     }
//
//     if (seconds < 10) {
//         return 'just now';
//     }
//
//     const intervals = [
//         { label: 'year', seconds: 31536000 },
//         { label: 'month', seconds: 2592000 },
//         { label: 'week', seconds: 604800 },
//         { label: 'day', seconds: 86400 },
//         { label: 'hour', seconds: 3600 },
//         { label: 'minute', seconds: 60 }
//     ];
//
//     let output = '';
//     let foundInterval = false;
//
//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         const count = Math.floor(seconds / interval.seconds);
//
//         if (count >= 1) {
//             if (count === 1 && interval.label === 'minute' && seconds < 120) {
//                 output += '1 minute ago';
//             } else if (count >= 30 && count < 60 && interval.label === 'minute' && seconds < 3600) {
//                 output += '30 minutes ago';
//             } else if (interval.label === 'hour' && count === 1) {
//                 output += '1 hour ago';
//             } else {
//                 output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
//             }
//
//             seconds -= count * interval.seconds;
//             foundInterval = true;
//
//             if (seconds > 0) {
//                 output += ', ';
//             } else {
//                 break;
//             }
//         }
//     }
//
//     if (!foundInterval) {
//         output = 'just now';
//     }
//
//     // Удаление запятой в конце строки, если присутствует
//     if (output.endsWith(', ')) {
//         output = output.slice(0, -2);
//     }
//
//     return output;
// }

// function timeago(seconds) {
//     if (seconds < 0 || seconds >= 2419200) {
//         return 'undefined';
//     }
//
//     if (seconds < 10) {
//         return 'just now';
//     }
//
//     const intervals = [
//         { label: 'year', seconds: 31536000 },
//         { label: 'month', seconds: 2592000 },
//         { label: 'week', seconds: 604800 },
//         { label: 'day', seconds: 86400 },
//         { label: 'hour', seconds: 3600 },
//         { label: 'minute', seconds: 60 }
//     ];
//
//     let output = '';
//     let foundInterval = false;
//
//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         const count = Math.floor(seconds / interval.seconds);
//
//         if (count >= 1) {
//             if (count === 1 && interval.label === 'minute' && seconds < 120) {
//                 output += '1 minute ago';
//             } else if (count >= 30 && count < 60 && interval.label === 'minute' && seconds < 3600) {
//                 output += '30 minutes ago';
//             } else if (interval.label === 'hour' && count === 1 && seconds < 7200) {
//                 output += '1 hour ago';
//             } else if (interval.label === 'hour' && count >= 2 && seconds < 3600) {
//                 output += `${count} hours ago`;
//             } else {
//                 output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
//             }
//
//             seconds -= count * interval.seconds;
//             foundInterval = true;
//             break;
//         }
//     }
//
//     if (!foundInterval) {
//         output = 'just now';
//     }
//
//     return output;
// }


// function timeago(seconds) {
//     if (seconds < 0 || seconds >= 2419200) {
//         return 'undefined';
//     }
//
//     if (seconds < 10) {
//         return 'just now';
//     }
//
//     const intervals = [
//         { label: 'year', seconds: 31536000 },
//         { label: 'month', seconds: 2592000 },
//         { label: 'week', seconds: 604800 },
//         { label: 'day', seconds: 86400 },
//         { label: 'hour', seconds: 3600 },
//         { label: 'minute', seconds: 60 }
//     ];
//
//     let output = '';
//     let foundInterval = false;
//
//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         const count = Math.floor(seconds / interval.seconds);
//
//         if (count >= 1) {
//             if (count === 1 && interval.label === 'minute' && seconds < 120) {
//                 output += '1 minute ago';
//             } else if (count >= 30 && count < 60 && interval.label === 'minute' && seconds < 3600) {
//                 output += '30 minutes ago';
//             } else if (interval.label === 'hour' && count >= 12 && seconds < 86400) {
//                 output += '12 hours ago';
//             } else if (interval.label === 'hour' && count >= 1 && count < 12 && seconds < 7200) {
//                 output += `${count} hour ago`;
//             } else if (interval.label === 'hour' && count >= 2 && count < 12 && seconds < 3600) {
//                 output += `${count} hours ago`;
//             } else {
//                 output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
//             }
//
//             seconds -= count * interval.seconds;
//             foundInterval = true;
//             break;
//         }
//     }
//
//     if (!foundInterval) {
//         output = 'just now';
//     }
//
//     return output;
// }



// function timeago(seconds) {
//     if (seconds < 0 || seconds >= 2419200) {
//         return 'undefined';
//     }
//
//     if (seconds < 10) {
//         return 'just now';
//     }
//
//     const intervals = [
//         { label: 'year', seconds: 31536000 },
//         { label: 'month', seconds: 2592000 },
//         { label: 'week', seconds: 604800 },
//         { label: 'day', seconds: 86400 },
//         { label: 'hour', seconds: 3600 },
//         { label: 'minute', seconds: 60 }
//     ];
//
//     let output = '';
//     let foundInterval = false;
//
//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         const count = Math.floor(seconds / interval.seconds);
//
//         if (count >= 1) {
//             if (count === 1 && interval.label === 'minute' && seconds < 120) {
//                 output += '1 minute ago';
//             } else if (count >= 30 && count < 60 && interval.label === 'minute' && seconds < 3600) {
//                 output += '30 minutes ago';
//             } else if (interval.label === 'hour' && count >= 12 && seconds < 86400) {
//                 output += '12 hours ago';
//             } else if (interval.label === 'hour' && count >= 1 && count < 12 && seconds < 7200) {
//                 output += `${count} hour ago`;
//             } else if (interval.label === 'hour' && count >= 2 && count < 12 && seconds < 3600) {
//                 output += `${count} hours ago`;
//             } else if (interval.label === 'day' && count >= 1 && count < 2 && seconds < 172800) {
//                 output += '1 day ago';
//             } else if (interval.label === 'day' && count >= 2 && seconds < 604800) {
//                 output += 'a few days ago';
//             } else {
//                 output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
//             }
//
//             seconds -= count * interval.seconds;
//             foundInterval = true;
//             break;
//         }
//     }
//
//     if (!foundInterval) {
//         output = 'just now';
//     }
//
//     return output;
// }


function timeago(seconds) {
    if (seconds < 0 || seconds >= 2419200) {
        return 'undefined';
    }

    if (seconds < 10) {
        return 'just now';
    }

    if (seconds < 60) {
        const numSeconds = seconds.toString(); // Преобразуем число в строку
        if (numSeconds.length >= 2) {
            const newNumSeconds = numSeconds.substr(0, 1) + '0' + numSeconds.substr(2);
            seconds=newNumSeconds
            return `${seconds} seconds ago`;
        }

    }

    // Массив объектов, представляющих временные интервалы
    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 }
    ];

    let output = '';
    let foundInterval = false;
    // Флаг, указывающий, был ли найден подходящий временной интервал

    // Итерируемся по массиву интервалов
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const count = Math.floor(seconds / interval.seconds);
        // Определяем количество интервалов в количестве секунд

        if (count >= 1) {
            // Проверяем различные условия для каждого интервала

            // Если прошла одна минута и количество секунд меньше 120, возвращаем '1 minute ago'
            if (count === 1 && interval.label === 'minute' && seconds < 120) {
                output += '1 minute ago';
            }

            // Если прошло больше 30 минут и количество секунд меньше 3600, возвращаем '30 minutes ago'
            else if (count >= 30 && count < 60 && interval.label === 'minute' && seconds < 3600) {
                output += '30 minutes ago';
            }
            // Если прошло больше 12 часов и количество секунд меньше 86400, возвращаем '12 hours ago'
            else if (interval.label === 'hour' && count >= 12 && seconds < 86400) {
                output += '12 hours ago';
            }

            // Если прошел один час и количество секунд между 1 и 12, возвращаем '1 hour ago'
            else if (interval.label === 'hour' && count >= 1 && count < 12 && seconds < 7200) {
                output += `${count} hour${count > 1 ? 's' : ''} ago`;
            }
            // Если прошло больше 2 часов и количество секунд меньше 3600, возвращаем '2 hours ago', '3 hours ago' и т.д.
            else if (interval.label === 'hour' && count >= 2 && count < 12 && seconds < 3600) {
                output += `${count} hours ago`;
            }
            // Если прошел один день и количество секунд между 1 и 2, возвращаем '1 day ago'
            else if (interval.label === 'day' && count >= 1 && count < 2 && seconds < 172800) {
                output += '1 day ago';
            }
            // Если прошло больше 2 дней и количество секунд меньше 604800, возвращаем 'a few days ago'
            else if (interval.label === 'day' && count >= 2 && seconds < 604800) {
                output += 'a few days ago';
            }
            // В остальных случаях возвращаем строку вида 'X years ago', 'X months ago' и т.д.
            else {
                output += `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
            }

            seconds -= count * interval.seconds;
            // Вычитаем количество пройденных интервалов из общего количества секунд
            // Общее количество секунд, соответствующее найденным интервалам, вычитается из исходного значения seconds.
            // Например, если seconds равно 3600 (1 час), а count равно 1, а interval.seconds равно 3600 (количество секунд в часе), то результатом будет seconds = 3600 - (1 * 3600) = 0. Теперь переменная seconds содержит оставшееся количество секунд после учета одного найденного интервала.
            foundInterval = true;
            // Устанавливаем флаг, что был найден подходящий интервал
            break;
            // Прекращаем итерацию, так как подходящий интервал найден
        }
    }

    if (!foundInterval) {
        output = 'just now';
        // Если не был найден подходящий интервал, устанавливаем 'just now'
    }

    return output;
    // Возвращаем результирующую строку
}


module.exports = timeago;
