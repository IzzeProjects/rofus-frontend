import {escClose, toggle} from "./sidebar";
let events = function () {
    document
        .getElementsByClassName('js-sidebar-open')[0]
        .addEventListener('click', toggle)
    document
        .getElementsByClassName('js-sidebar')[0]
        .addEventListener('keydown', escClose)
    document
        .getElementsByClassName('js-sidebar-close')[0]
        .addEventListener('click', toggle)
}

export  {
    events
}