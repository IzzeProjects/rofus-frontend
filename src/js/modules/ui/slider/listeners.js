import {startAnimation, cardSelect} from "./cardSlider";

let events = function () {
    Array.from(document.getElementsByClassName('dancer-profile-container'))
        .forEach(function (element) {
            element.addEventListener('click', startAnimation)
        })

    Array.from(document.getElementsByClassName('cardSVGArrow'))
        .forEach(function (element) {
            element.addEventListener('click', cardSelect)
        })
}

export {
    events
}