export class filterMovies {
  constructor (node, buttonFilter, buttonReset) {
    this.node = node
    this.buttonFilter = buttonFilter
    this.buttonReset = buttonReset
    this.events()
  }

  events () {
    this.node.addEventListener('click', e => {
      const clicked = e.target
      if (clicked.classList.contains('main-header__button--reset')) {
        this.buttonReset()
        return null
      }

      if (clicked.classList.contains('main-header__button')) {
        this.buttonFilter(clicked.textContent)
      }
    })
  }
}
