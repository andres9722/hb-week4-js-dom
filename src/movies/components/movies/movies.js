export class Movies {
  constructor (data) {
    this.data = `
        <h2 class="movies-item__title" data-genre=${data.category.toLowerCase()}>${data.title}</h2>
        <p class="movies-item__director">  <b> Director: </b>  ${data.director}</p>
        <p class="movies-item__category"> <b> Category: </b> ${data.category}</p>
        <img class="movies-item__image" src="${data.image}">
        <div class="movies-item__info">
          <p class="movies-item__year"> <b> Year: </b> ${data.year}</p>
          <p class="movies-item__stars"> <b>Stars: </b>${data.starts}</p>
        </div>
    `
  }
}
