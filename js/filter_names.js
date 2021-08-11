import { getFromLS } from './LS.js'

export const filter_names = (i) => {
    let data = getFromLS(),
        summ,
        nameArr;

    nameArr = data.filter(({ name }) => i === name)
    summ = nameArr.reduce((acc, { price }) => acc += price, 0);

    return { nameArr, summ }
};