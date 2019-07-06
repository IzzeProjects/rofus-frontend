import {escClose, toggle} from "./sidebar";
import {startAnimSVG, reverseAnimSVG} from "./header";
import {startAnimation} from "./cardSlider"

let events = function () {

    Array.from(document.getElementsByClassName('dancer-profile-container'))
        .forEach(function (element) {
            element.addEventListener('click', startAnimation)
        })
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

export {
    events
}