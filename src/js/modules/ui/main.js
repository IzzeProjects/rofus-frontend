import {events as header} from './header/listeners'
import {events as sidebar} from './sidebar/listeners'
// import {clickedSVG} from './header'
import {events} from './listeners'
import {prepareAnimation} from './cardSlider'

let uiModule = () => {
    header()
    sidebar()
    // clickedSVG()
    events()
    prepareAnimation()
};

export {
    uiModule
}