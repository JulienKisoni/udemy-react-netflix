import React, { Component } from 'react';

import { Home } from './routes';
import { Header } from './components';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    movies: [
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475557,
        overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
          backdrop_path: './images/Fast_large.jpg',
          id: 475558,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
        {
          backdrop_path: './images/Fast_large.jpg',
          id: 475559,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
        {
          backdrop_path: './images/Fast_large.jpg',
          id: 475554,
          overview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
          poster_path: './images/Fast_small.jpg',
          title: "Fast and Furious"
        },
    ],
    badge: 0,
    image: './images/Fast_large.jpg',
    mTitle: 'Fast and Furious',
    mDesc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    activePage: 0,
    totalPages: 0,
    searchText: ""
  }
  handleSearch = value => {
    // lancer la recherche ici
    console.log('handleSearch', value);
  }
  loadMore = () => {
    // lancer une requette ici
    console.log('load more');
  }
  render() {
    return (
      <div className="App">
        <Header badge={this.state.badge} />
        <Home 
          {...this.state}
          onSearchClick={this.handleSearch}
          onButtonClick={this.loadMore}
        />
      </div>
    );
  }
}

export default App;
