import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/SearchBar.css';

class Searchbar extends Component {
    render() {
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                    <input 
                        className="searchBar--input" 
                        type="text" 
                        placeholder="Rechercher un Film" 
                    />
                    <div className="searchBar--submit">
                        <FontAwesome className="searchIcon" name="search" />
                    </div>
                </div>
            </div>
        )
    }
}

export { Searchbar };