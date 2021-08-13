import { Key, Key2 } from "./constants.js";

const getFromLS = () => {
    return JSON.parse(localStorage.getItem(Key) || '[]');
};

const RecordInLS = (data) => {
    localStorage.setItem(Key, JSON.stringify(data));
};

const RecordInLikeLS = (data) => {
    localStorage.setItem(Key2, JSON.stringify(data));
};

const getLikesFromLS = () => {
    return JSON.parse(localStorage.getItem(Key2) || '[]');
};

export { getFromLS, RecordInLS, getLikesFromLS, RecordInLikeLS };