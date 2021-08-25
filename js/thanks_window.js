import { thanksWinWrapper, thanks_mess } from "./constants.js";

export function thanks_window() {
    thanksWinWrapper.classList.toggle('thanks_win_wrapper_active');
    thanks_mess.classList.toggle('thanks_mess_active');
}

export function thanks_window_close() {
    thanksWinWrapper.classList.toggle('thanks_win_wrapper_active');
    thanks_mess.classList.toggle('thanks_mess_active');
}