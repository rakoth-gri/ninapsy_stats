import { Reg_name, Reg_tel, Reg_textarea } from "./constants.js";

export const Validation = (data) => {

    for (let i of data) {
        i.addEventListener('input', function() {
            correctValues(this)
        });
    }
};

function correctValues(el) {

    let elem = el.nextElementSibling;
    elem.classList.add('error');

    if (el.name === "tel")
        Reg_tel.test(el.value) ? elem.textContent = '' : elem.textContent = 'Введите корректный телефон!'
    else if (el.name === "textarea")
        Reg_textarea.test(el.value) ? elem.textContent = '' : elem.textContent = 'Введите не менее 15 символов'
    else if (el.name === "name")
        Reg_name.test(el.value) ? elem.textContent = '' : elem.textContent = 'Введите корректное имя'
    else
        el.value ? elem.textContent = '' : elem.textContent = 'Выберите тип консультации'
}