/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    const stack = [];
    if( value==='')return false

    for (let i = 0; i < value.length; i++) {
        const char = value[i];
        // Если символ - открывающая скобка '(', мы добавляем ее в стек.
        if (char === '(') {
            stack.push(char);
            //Если символ - закрывающая скобка ')', мы проверяем условия
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                //Если стек пуст (stack.length === 0), или последняя скобка в стеке не является соответствующей открывающей скобкой (stack.pop() !== '('), возвращаем false.
                return false;
            }
        }
    }

    return stack.length === 0;
    // Если после прохода по всей строке стек остается пустым, значит, все открывающие скобки имели соответствующие закрывающие, и возвращаем true. В противном случае, если в стеке остались непарные открывающие скобки, возвращаем false.
}
module.exports = parentheses;
