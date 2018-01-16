export class Header {
  constructor (selector, data) {
    this.node = document.querySelector(selector)
    this.setTemplateheader()
    this.categories = document.querySelector('.main-header__categories')
    this.setDataHeader(data)
  }

  setTemplateheader () {
    const headerCont = `
      <div class="main-header__container">
        <h1 class="main-header__title">MOVIES</h1>
        <div class="main-header__categories">
          <button class="main-header__button main-header__button--reset">Reset</button>
        </div>
      </div>
    `

    this.node.innerHTML = headerCont
  }

  setDataHeader (data) {
    const categories = []
    data.forEach(movie => {
      if (categories.indexOf(movie.category) < 0) {
        categories.push(movie.category)
      }
    })

    const temporalNode = document.createDocumentFragment()
    categories.forEach(category => {
      const moviesCategories = document.createElement('div')
      const moviesContent = `
        <button class="main-header__button main-header__button--${category.toLowerCase()}">${category.toLowerCase()}</button>
        `
      moviesCategories.classList.add('main-header__category')
      moviesCategories.innerHTML = moviesContent
      temporalNode.appendChild(moviesCategories)
    })

    this.categories.appendChild(temporalNode)
  }
}
