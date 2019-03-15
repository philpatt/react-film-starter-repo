import React, { Component } from 'react';
import './index.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      films: TMDB.films,
      current: {}
    }
    this.handleDetailsClick =this.handleDetailsClick.bind(this)
  }  
  
  handleDetailsClick(title) {
    console.log('fetching details for' + title)
    this.setState({
      current: title
    }) 
  }
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={this.state.films} onDetailsClick={this.onDetailsClick} />
          <FilmDetails film={this.state.current} />
        
        </div>
      </div>
    );
  }
}
export default App;
