import { content__posts } from './constants.js';
import { deleteConsultations } from './deleteConsultations.js';
import { likedPosts } from './likedPosts.js';
import { viewMessage } from './viewMessage.js';
import { getLikesFromLS, RecordInLikeLS } from './LS.js';

export function showJournal(data) {

    content__posts.innerHTML = '';

    // let storage = getFromLS();

    data.forEach(({ name, date, select, phone, like, id }) => {

        let post = document.createElement('div');
        post.classList.add('post');

        let a = "post__like";

        like ? a += " like" : a;

        post.innerHTML = `
                <span class="icon-star-empty ${a} icon" data-id=${id}></span>
                <span class="post__span"> <span class="icon-user-tie icon"></span> ${name}</span>                
                <span class="post__span"> <span class="icon-calendar icon"></span> ${new Date(date).toDateString().slice(4)}</span>
                <span class="post__span"> <span class="icon-mobile icon"></span> ${phone}</span>
                <span class="post__span"> <span class="icon-file-text icon"></span> ${select}</span>                
                <button class="post__mess_btn"> читать </button> 
                <button class="post__btn" data-id=${id}> удалить </button>
                <span class="icon-bubble2 icon"></span>
                `;
        // <span class="post__span"> <span class="icon-bubble2"></span> ${message} </span>
        content__posts.append(post);
    });

    // образовавшиеся константы
    const post__btn = content__posts.querySelectorAll(".post__btn"),
        post__like = content__posts.querySelectorAll(".post__like"),
        postMessBtn = content__posts.querySelectorAll(".post__mess_btn"),
        postWrapper = content__posts.querySelectorAll(".post");


    // удаление записи
    post__btn.forEach(item => {
        item.addEventListener('click', () => {
            let attr = +item.getAttribute('data-id');
            deleteConsultations(attr);
        });
    });


    // избранные записи
    post__like.forEach(item => {
        item.addEventListener('click', () => {
            let attr = +item.getAttribute('data-id'),
                likeStore = getLikesFromLS(),
                ind = likeStore.indexOf(attr);

            // Избавляемся от копий в массиве и манипулируем attr и классом! 
            if (!likeStore.includes(attr)) {
                likeStore.push(attr);
                item.classList.toggle('like');
            } else {
                item.classList.toggle('like');
                likeStore.splice(ind, 1);
            }
            RecordInLikeLS(likeStore);
            likedPosts(likeStore);
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