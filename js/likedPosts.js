import { RecordInLS, getFromLS } from './LS.js';


export const likedPosts = likeStore => {

    let currentLS = getFromLS();

    for (let { id, like }
        of currentLS) {

        likeStore.includes(id) ? like = true : like = false;

    }
    RecordInLS(currentLS);
};