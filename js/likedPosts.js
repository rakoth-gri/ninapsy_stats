import { RecordInLS, getFromLS } from './LS.js';


export const likedPosts = likeStore => {

    let currentLS = getFromLS();

    for (let i of currentLS) {

        likeStore.includes(i.id) ? i.like = true : i.like = false;

    }
    RecordInLS(currentLS);
};