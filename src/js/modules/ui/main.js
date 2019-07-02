import {events as header} from './header/listeners'
import {events as sidebar} from './sidebar/listeners'
// import {clickedSVG} from './header'

let uiModule = () => {
    header()
    sidebar()
    // clickedSVG()
};

export {
    uiModule
}