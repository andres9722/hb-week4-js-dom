import { Header } from './components/header/header.js'
import { Movies } from './components/movies/movies.js'
import { Grid } from './components/grid/grid.js'
import dataMovies from './components/data/movies-data.js'

/* eslint-disable */
const container = '.movies-container'

const movies = dataMovies.map(movie => new Movies(movie))

const grid = new Grid(container, movies, dataMovies)

/*const filter = new filterMovies(document.querySelector('.main-header'),
                                grid.filterByCategory.bind(grid), 
                                grid.reset.bind(grid))*/

const header = new Header('.main-header', 
                            grid.filterByCategory.bind(grid),
                            grid.reset.bind(grid),
                            dataMovies)
/* eslint-enable */
