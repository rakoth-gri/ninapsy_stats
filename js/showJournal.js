import { content__posts } from './constants.js';
import { deleteConsultations } from './deleteConsultations.js';
import { likedPosts } from './likedPosts.js';

export function showJournal(data) {

    content__posts.innerHTML = '';

    // let storage = getFromLS();

    data.forEach(({ name, date, select, phone, message, like }) => {

        let post = document.createElement('div');
        post.classList.add('post');

        let a = "post__like";

        like ? a += " like" : a;

        post.innerHTML = `
                <span class="icon-star-empty ${a}"></span>
                <span class="post__span"> <span class="icon-user-tie"></span> ${name}</span>                
                <span class="post__span"> <span class="icon-calendar"></span> ${new Date(date).toDateString().slice(4)}</span>
                <span class="post__span"> <span class="icon-mobile"></span> ${phone}</span>
                <span class="post__span"> <span class="icon-file-text"></span> ${select}</span>
                <span class="post__span"> <span class="icon-bubble2"></span> ${message} </span>
                <button class="post__btn"> удалить </button>
                `;
        content__posts.append(post);
    });

    const post__btn = content__posts.querySelectorAll(".post__btn"),
        post__like = content__posts.querySelectorAll(".post__like");

    post__btn.forEach((item, index) => {
        item.addEventListener('click', () => {
            deleteConsultations(index, data);
        });
    });

    post__like.forEach((item, index) => {
        item.addEventListener('click', () => {
            likedPosts(item, index);
        });
    });
}