import React, { Component } from 'react';

import { HeaderImg, Searchbar, PosterList, LoadButton } from '../components';
  
class Home extends Component {
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
                <PosterList movies={movies} />
                <LoadButton onButtonClick={this.props.onButtonClick} loading={loading}/>
            </div>
        )
    }
}

export { Home };