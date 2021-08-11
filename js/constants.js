// Константы
const form = document.querySelector('.content__form'),
    input = form.querySelectorAll(".content__form_input"),
    select = form.querySelector(".content__form_select"),
    btn = form.querySelector(".content__form_btn"),
    spanError = form.querySelectorAll("span"),
    content = document.querySelector('.content'),
    textArea = form.querySelector(".content__form_textarea"),
    Key = 'meeting',

    label = document.querySelector('.label'),
    label__likes = label.querySelector('.label__button'),
    label__date = label.querySelectorAll('.label__input'),
    label__btn_date = label.querySelector('.label__btn_date'),
    label__sum = label.querySelector('.label__sum'),
    label__name = label.querySelector('.label__name');

// Переменные
let content__posts = document.createElement('div');
content__posts.className = 'content__posts';
content.append(content__posts);

// Регулярные выражения
const Reg_name = /^[A-ZА-Я\s]{3,20}$/i,
    Reg_tel = /^[\d]{11}$/i,
    Reg_textarea = /^.{15,120}$/i;

// экспорт в другие модули -------
export { form, input, select, textArea, btn, spanError, content__posts, Key, Reg_name, Reg_tel, Reg_textarea, label__likes, label__date, label__sum, label__btn_date, label__name }