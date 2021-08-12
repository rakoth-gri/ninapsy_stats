import { showJournal } from './showJournal.js';
import { RecordInLS } from './LS.js';
import { getFromLS } from './LS.js';


const deleteConsultations = (index) => {

    let currentLS = getFromLS();
    currentLS.splice(index, 1);
    RecordInLS(currentLS);
    showJournal(currentLS);
};

export { deleteConsultations };