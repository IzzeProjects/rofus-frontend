/**
 * After page load prepares cards, turning them in the direction of future animation
 */
let prepareAnimation = function () {
    let allCards = document.getElementsByClassName("dancer-profile-container")
    for (let card = 0; card < allCards.length; card++) {
        if (card === 0) {
            allCards[card].setAttribute("data-position", card)
            allCards[card].classList.add("dancer-profile-card-current")
        } else {
            allCards[card].classList.add("dancer-profile-card-prepared")
            allCards[card].setAttribute("data-position", card)
        }
    }
}



/**
 * This function starts after selected card click.
 *
 * Realise width changing of the .dancers-profile container and creates the effect of card moving
 */
let startAnimation = function () {
    let allCards = document.getElementsByClassName("dancer-profile-container")
    let card = allCards[0]
    let computedStyle = window.getComputedStyle(card)
    let parentNodeOfCards = document.getElementsByClassName("dancers-profiles")[0]
    let cardWidth = parseFloat(computedStyle.width)
    let cardMargin = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight)
    let realCardSize = cardWidth + cardMargin
    let cardPosition = parseFloat(this.getAttribute("data-position"))

    parentNodeOfCards.style.width = (((realCardSize * cardPosition) + 800) + (realCardSize * cardPosition - 1)) + "px"

    swapCardStyle(allCards, cardPosition, this)
}



/**
 * Realise changing the direction of the cards on both sides of the current card, and selecting the current card as main
 *
 * @param allCards Array of all cards on page
 * @param cardPosition Current card position
 * @param currentElem Current clicked element
 */
let swapCardStyle = function (allCards, cardPosition, currentElem) {
    for (let card = 0; card < allCards.length; card++) {
        if (card < cardPosition) {
            allCards[card].classList.remove("dancer-profile-card-prepared")
            allCards[card].classList.remove("dancer-profile-card-current")
            allCards[card].classList.add("dancer-profile-card-reversed")
        } else {
            allCards[card].classList.remove("dancer-profile-card-reversed")
            allCards[card].classList.remove("dancer-profile-card-current")
            allCards[card].classList.add("dancer-profile-card-prepared")
        }
    }
    currentElem.classList.remove("dancer-profile-card-prepared")
    currentElem.classList.add("dancer-profile-card-current")
}
export {
    prepareAnimation, startAnimation
}