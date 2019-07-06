import {startAnimation} from "./cardSlider";

let events = function () {
        Array.from(document.getElementsByClassName('dancer-profile-container'))
        .forEach(function (element) {
            element.addEventListener('click', startAnimation)
        })
}

export {
    events
}