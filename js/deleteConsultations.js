import { showJournal } from './showJournal.js'
import { RecordInLS } from './LS.js'


const deleteConsultations = (index, currentLS) => {
    currentLS.splice(index, 1);
    // RecordInLS(currentLS);
    showJournal(currentLS);
}

export { deleteConsultations }