import { Key } from "./constants.js";

const getFromLS = () => {
    return JSON.parse(localStorage.getItem(Key) || '[]');
};

const RecordInLS = (data) => {
    localStorage.setItem(Key, JSON.stringify(data));
};

export { getFromLS, RecordInLS };