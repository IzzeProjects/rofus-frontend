let modalsModule = () => {
    openListeners()
    closeListeners()
}

let openListeners =function() {
    let modals = document.getElementsByClassName('js-modal-open')

    for (let i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', openModal)
    }
}

let closeListeners =function() {
    let modals = document.getElementsByClassName('js-modal-close')

    for (let i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', closeModal)
    }
}

let openModal = function () {
    let formIdent = this.dataset.modalOpen
    let form = document.querySelector("[data-form='" + formIdent + "']")
    form.style.display = 'flex'
}

let closeModal = function () {
    let formIdent = this.dataset.modalClose
    let form = document.querySelector("[data-form='" + formIdent + "']")
    form.style.display = 'none'
}

export {
    modalsModule
}