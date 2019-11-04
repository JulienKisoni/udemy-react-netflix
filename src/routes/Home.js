import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderImg, Searchbar, PosterList, LoadButton } from '../components';
import { getMovies } from '../actions/movie';

import { renderLogin } from '../utils/helpers';

const flag = renderLogin();
  
class HomeComponent extends Component {
    state = {
        flag: flag
    }
    componentDidMount() {
        if(!this.state.flag) {
            this.props.history.push({ pathname: '/login'});
            return;
        }
        this.props.getMovies();
    }
    render() {
      const { mTitle, mDesc, image, movies, loading } = this.props;
        return (
            <div>
                <HeaderImg 
                    title={mTitle}
                    overview={mDesc}
                    imgScr={image}
                />
                <Searchbar onSearchClick={this.props.onSearchClick} />
                <PosterList movies={movies} localMovies={this.props.localMovies} />
                <LoadButton onButtonClick={this.props.onButtonClick} loading={loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        localMovies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies())
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { Home };