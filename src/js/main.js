const button = document.querySelector(`.burger--close`)
const menu = document.querySelector(`.main-header__container`)
const btnSubmenu = document.querySelectorAll(`.card__btn`)


button.addEventListener(`click`, function () {
    if (button.classList.contains(`burger--close`)) {
        button.classList.remove(`burger--close`)
        button.classList.add(`burger--open`)
        menu.classList.remove(`main-header__container--close`)
        menu.classList.add(`main-header__container--open`)
    } else {
        button.classList.remove(`burger--open`)
        button.classList.add(`burger--close`)
        menu.classList.remove(`main-header__container--open`)
        menu.classList.add(`main-header__container--close`)
    }
})


document.querySelectorAll(`.tabs-triggers__item`).forEach((item) => item.addEventListener(`click`, function (evt) {
    evt.preventDefault()
    const id = evt.target.getAttribute(`href`).replace(`#`, ``)
    document.querySelectorAll(`.tabs-triggers__item`).forEach((child) =>
        child.classList.remove(`tabs-triggers__item--active`))
    document.querySelectorAll(`.tabs-content__item`).forEach((child) =>
        child.classList.remove(`tabs-content__item--active`))

    item.classList.add(`tabs-triggers__item--active`)
    document.getElementById(id).classList.add(`tabs-content__item--active`)
})
)

btnSubmenu.forEach((item) => item.addEventListener(`click`, function (evt) {
    if (evt.target.closest(`.card__wrap-dropdawn`)) {
        const cartSubmenu = evt.target.nextElementSibling
        function removeToogleListener() {
            cartSubmenu.classList.toggle(`card__submenu--active`)
            cartSubmenu.removeEventListener(`mouseleave`, removeToogleListener)
        }
        cartSubmenu.classList.toggle(`card__submenu--active`)
        cartSubmenu.addEventListener(`mouseleave`, removeToogleListener)
    }
}))

