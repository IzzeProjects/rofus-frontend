import {events} from './listeners'
import {prepareAnimation} from './cardSlider'

let uiModule = () => {
    events()
    prepareAnimation()
};

export {
    uiModule
}