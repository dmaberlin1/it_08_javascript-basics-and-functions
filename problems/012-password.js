/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    // Проверяем длину пароля
    if (password.length < 7) {
        return false;
    }
    // Проверяем наличие строчной английской буквы
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // Проверяем наличие заглавной английской буквы
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Проверяем наличие цифры
    if (!/\d/.test(password)) {
        return false;
    }
    //можно написать через || -Или
    // Если все условия выполнены, пароль является криптостойким
    return true;
}

module.exports = validatePassword;
