import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter: 'all',
            faves: []
        }
        //handleFilterClick is bound to the fave.jsx
        this.handleFilterClick = this.handleFilterClick.bind(this)
        //if they use handleFaveToggle it will be bound to the film Listing 
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
    }
    handleFilterClick(filter) {
        this.setState({
            filter: filter
        })
        console.log('CLICKED')
    }

    handleFaveToggle(film) {
        console.log('toggling film', film)
        //slice is the most efficient way to copy an array
        let newFaves =this.state.faves.slice()
        //take film obj in filmrow and look thru the entire obj to find the index of a film within the array to find which film is favorited
        const filmIndex = newFaves.indexOf(film)
        //if films exist in faves already, take it out of the array. 
        if (filmIndex > -1) {
            newFaves.splice(filmIndex, 1)
        } else {
            //film is not a fave yet, add it to faves
            newFaves.push(film)
        }
        //bound to pass into another component 
        this.setState({
            faves: newFaves
        })
    }

    render() {
        let fave;
        const filmsToDisplay = this.state.filter === 'all' ? this.props.films : this.state.faves
        const allFilms = filmsToDisplay.map( (film, index) => {
            if (this.state.faves.includes(film)) {
                //film is a fave
                fave = true
            } else {
                //film is not a fave
                fave = false
            }
            //film listing contains all films, film row holds ONE film and all the INFO on THAT film. 
            return (
                <FilmRow onDetailsClick={this.props.onDetailsClick} isFave={fave} film={film} key={index} onFaveToggle={this.handleFaveToggle} />
            )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className = {this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className= {this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">{this.state.faves.length}</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
}
    



export default FilmListing;
