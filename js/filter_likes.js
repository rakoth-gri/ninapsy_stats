import { getFromLS } from './LS.js';

export const filter_likes = () => {
    let data = getFromLS();
    return data.filter(({ like }) => like === true);
};