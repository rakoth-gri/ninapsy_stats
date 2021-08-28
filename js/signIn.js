// секция констант!

const form = document.getElementById('passForm'),
    link = form.querySelector('.link'),
    formElements = Array.from(form.elements);
// без spread - оператора переводим HTML-коллекцию в массив!


link.addEventListener('click', () => {

    const mass = ["nina_psy", "rebenok"];
    let result = true;

    formElements.forEach((el, ind) => {
        let warning = el.nextElementSibling;
        if (el.value === "" || el.value.trim() !== mass[ind]) {
            result = false;
            warning.textContent = "Введите корректное значение поля";
        } else {
            warning.textContent = "";
        }
    });

    if (result) {
        link.setAttribute('href', "./main.html");
        link.classList.add('active');
    } else {
        link.removeAttribute('href');
        link.classList.remove('active');
    }
});