import { postMessWrapper } from "./constants.js";

export function viewMessage(index, storage, postWrapper) {

    postWrapper[index].style.background = "rgba(0,0,0,.7)";

    postMessWrapper.innerHTML = `
        <div class="post_mess">
            <h1 class="post_mess__title"> Клиент: &nbsp; ${storage.name.substr(0,1).toUpperCase()}${storage.name.substr(1).toLowerCase()} </h1>
            <div class="post_mess__text"> ${storage.message.trim()} </div>
            <div class="post_mess__date"> ${new Date(storage.date).toLocaleDateString()} </div>
            <div class="post_mess__exit"> &#10006; </div>
        </div>`;

    postMessWrapper.classList.add('active');

    let exit = postMessWrapper.querySelector('.post_mess__exit');

    exit.addEventListener('click', function() {
        postMessWrapper.classList.remove('active');
        postWrapper[index].style.background = "transparent";
    });
}