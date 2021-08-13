import { getFromLS } from './LS.js';

// прототипируем метод ---
// Date.prototype.dateSum = function() {
//     return this.getDate() + this.getMonth() + this.getFullYear();
// };

// export const filter_dates = (arr) => {

//     let storage = getFromLS(),
//         newArr = [],
//         sum = 0;

//     if (arr.length < 2) {
//         newArr = storage.filter(({ date }) => new Date(date).dateSum() === arr[0].dateSum());
//         sum = newArr.reduce((acc, { price }) => acc += price, 0);
//         return { sum, newArr };
//     }
//     newArr = storage.filter(({ date }) => new Date(date).dateSum() >= arr[0].dateSum() && new Date(date).dateSum() <= arr[1].dateSum());
//     sum = newArr.reduce((acc, { price }) => acc += price, 0);
//     return { sum, newArr };
// };

// Правильный алгоритм

Date.prototype.dateSum = function() {
    return Math.floor(Date.parse(this) / (1000 * 60 * 60 * 24));
};

export const filter_dates = (arr) => {

    let storage = getFromLS(),
        newArr = [],
        sum = 0;


    if (arr.length < 2) {
        newArr = storage.filter(i => new Date(i.date).dateSum() === arr[0].dateSum());
        sum = newArr.reduce((acc, { price }) => acc += price, 0);
        return { sum, newArr };
    }
    newArr = storage.filter(({ date }) => new Date(date).dateSum() >= arr[0].dateSum() && new Date(date).dateSum() <= arr[1].dateSum());
    sum = newArr.reduce((acc, { price }) => acc += price, 0);
    return { sum, newArr };
};