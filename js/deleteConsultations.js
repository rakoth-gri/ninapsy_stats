import { showJournal } from './showJournal.js';
import { RecordInLS, getFromLS } from './LS.js';


// const deleteConsultations = (index) => {

//     let currentLS = getFromLS();
//     currentLS.splice(index, 1);
//     RecordInLS(currentLS);
//     showJournal(currentLS);
// };


const deleteConsultations = (attr) => {

    let currentLS = getFromLS(),
        newLS = currentLS.filter(i => i.id !== attr);

    RecordInLS(newLS);
    showJournal(newLS);
};

export { deleteConsultations };