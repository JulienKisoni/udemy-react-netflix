import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/Poster.css';

class Poster extends Component {
    render() {
        return (
            <div className="poster">
                <img className="poster--img" src={this.props.imgSrc} alt="poster" />
                {this.props.hover ? 
                (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                        {this.props.whished ? 
                            (
                                <FontAwesome className="poster--icon" name="heart" size="3x" />
                            ) : 
                            (
                                <FontAwesome className="poster--icon_not" name="heart-o" size="3x" />
                            )
                        }
                    </div>
                ): null}
            </div>
        )
    }
}

export { Poster }