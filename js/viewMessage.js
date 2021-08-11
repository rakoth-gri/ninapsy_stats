import { postMess } from "./constants.js";

export function viewMessage(index, storage, postWrapper) {

    postWrapper[index].style.background = "rgba(0,0,0,.7)";

    postMess.innerHTML = `
        <h1 class="post_mess__title"> ПАЦИЕНТ: &nbsp; ${storage.name.substr(0,1).toUpperCase()}${storage.name.substr(1).toLowerCase()} </h1>
        <div class="post_mess__text"> ${storage.message.trim()} </div>
        <div class="post_mess__date"> ${new Date(storage.date).toLocaleString()} </div>
        <div class="post_mess__exit"> &#10006; </div>    
    `;
    postMess.style.display = "block";

    postMess.querySelector('.post_mess__exit').addEventListener('click', function() {
        postMess.style.display = "none";
        postWrapper[index].style.background = "transparent";
    });

}