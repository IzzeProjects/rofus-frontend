import {escClose, toggle} from "./sidebar";
import {startAnimSVG, reverseAnimSVG} from "./header";
let events = function () {
    document
        .getElementsByClassName('js-sidebar-open')[0]
        .addEventListener('click', toggle)
    document
        .getElementsByClassName('js-sidebar-open')[0]
        .addEventListener('mouseover', startAnimSVG)
    document
        .getElementsByClassName('js-sidebar-open')[0]
        .addEventListener('mouseout', reverseAnimSVG)
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