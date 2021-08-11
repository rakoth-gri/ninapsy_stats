import { content__posts } from './constants.js';
import { deleteConsultations } from './deleteConsultations.js';
import { likedPosts } from './likedPosts.js';
import { viewMessage } from './viewMessage.js';

export function showJournal(data) {

    content__posts.innerHTML = '';

    // let storage = getFromLS();

    data.forEach(({ name, date, select, phone, message, like }) => {

        let post = document.createElement('div');
        post.classList.add('post');

        let a = "post__like";

        like ? a += " like" : a;

        post.innerHTML = `
                <span class="icon-star-empty ${a} icon"></span>
                <span class="post__span"> <span class="icon-user-tie icon"></span> ${name}</span>                
                <span class="post__span"> <span class="icon-calendar icon"></span> ${new Date(date).toDateString().slice(4)}</span>
                <span class="post__span"> <span class="icon-mobile icon"></span> ${phone}</span>
                <span class="post__span"> <span class="icon-file-text icon"></span> ${select}</span>                
                <button class="post__mess_btn"> смотреть </button> 
                <button class="post__btn"> удалить </button>
                <span class="icon-bubble2 icon"></span>
                `;
        // <span class="post__span"> <span class="icon-bubble2"></span> ${message} </span>
        content__posts.append(post);
    });

    const post__btn = content__posts.querySelectorAll(".post__btn"),
        post__like = content__posts.querySelectorAll(".post__like"),
        postMessBtn = content__posts.querySelectorAll(".post__mess_btn"),
        postWrapper = content__posts.querySelectorAll(".post");

    // удаление записи
    post__btn.forEach((item, index) => {
        item.addEventListener('click', () => {
            deleteConsultations(index, data);
        });
    });

    // избранные записи
    post__like.forEach((item, index) => {
        item.addEventListener('click', () => {
            likedPosts(item, index);
        });
    });

    // информация о пациенте
    postMessBtn.forEach((item, index) => {
        item.addEventListener('click', function() {
            let storage = data[index];
            viewMessage(index, storage, postWrapper);
        });
    });
}