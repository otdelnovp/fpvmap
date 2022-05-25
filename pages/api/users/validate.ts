export const validate = (email: string, password: string) => {

    // const regExEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (email === undefined) {
        throw new Error('Поле Email должно быть указано')
    } else if (email.trim() === '') {
        throw new Error('Поле Email должно быть заполнено')
    }/* else if (!email.match(regExEmail)) {
        throw new Error('Введите корректный Email')
    }*/ else if (password === undefined) {
        throw new Error('Пароль должен быть указан')
    } else if (password.trim() === '') {
        throw new Error('Пароль должен быть заполнен')
    }
}