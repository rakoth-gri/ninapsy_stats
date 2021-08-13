import { getFromLS, RecordInLS } from "./LS.js";
import {
    form,
    input,
    select,
    textArea,
    label__likes,
    label__date,
    label__sum,
    label__btn_date,
    label__name,
} from "./constants.js";
import { Validation } from "./validation.js";
import { showJournal } from "./showJournal.js";
import { filter_likes } from "./filter_likes.js";
import { filter_dates } from "./filter_dates.js";
import { filter_names } from "./filter_names.js";

// создаем массив активных элементов формы и имеющих
const form__elements = [...form.elements];
form__elements.splice(form__elements.length - 1, 1);

// массив локального хранилища
let storage = getFromLS();
// отображение записанных клиентов
showJournal(storage);

// валидация данных, поступающих в элементы формы
Validation(form__elements);

// оснавная функция формы! ---------------
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let validate = true,
        storage = getFromLS(),
        price;

    for (let i of form__elements) {
        if (i.value === "") {
            validate = false;
            i.nextElementSibling.classList.add("error");
            i.nextElementSibling.textContent = "Заполните данное поле";
        }
    }

    if (validate) {
        let data = {
            name: input[0].value.trim().toLowerCase(),
            date: Date(),
            phone: input[1].value,
            select: select.value,
            message: textArea.value.trim(),
            like: false,
            id: +(Math.random() * 100).toFixed()
        };
        data.select === "очная" ? (data.price = 2000) : (data.price = 1700);
        storage.push(data);
        RecordInLS(storage);
        showJournal(storage);
        this.reset();
    }
});

// ---------------- ФИЛЬТР -------------------

// лайки -----------------
label__likes.addEventListener("click", () => {
    let filter_like = filter_likes();
    if (filter_like.length) {
        showJournal(filter_like);
    }
});

// даты --------------------
label__btn_date.addEventListener("click", () => {
    let arr = [];
    for (let i of label__date) {
        i.value !== "" ? arr.push(new Date(i.value)) : arr;
    }

    if (arr.length > 0) {
        const { newArr, sum } = filter_dates(arr);
        label__sum.style.display = "block";
        sum ? (label__sum.innerHTML = sum.toLocaleString() + " &#8381;") : (label__sum.textContent = "В выбранный период консультации не проводились!");
        showJournal(newArr);
        for (let i of label__date) {
            i.value = "";
        }
    } else {
        label__sum.style.display = "none";
        showJournal(storage);
    }
});

// имена  -----------------
label__name.addEventListener("input", function() {
    let a = this.value.trim().toLowerCase(),
        { nameArr, summ } = filter_names(a);

    if (nameArr.length) {
        showJournal(nameArr);
        label__sum.style.display = "block";
        label__sum.innerHTML = summ.toLocaleString() + " &#8381;";

    } else {
        this.nextElementSibling.textContent = "Выбранное имя отсутствует в базе";
        showJournal(storage);
        label__sum.style.display = "none";
    }
});