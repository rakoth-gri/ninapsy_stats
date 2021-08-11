import { RecordInLS } from './LS.js';
import { getFromLS } from './LS.js';

export const likedPosts = (item, index) => {

    let currentLS = getFromLS();

    item.classList.toggle('like')

    item.classList.contains('like') ? currentLS[index].like = true : currentLS[index].like = false;
    RecordInLS(currentLS);
}