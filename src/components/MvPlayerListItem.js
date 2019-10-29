import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/MvPlayerListItem.css';

class MvPlayerListItem extends Component {
    render() {
        const activeClass = this.props.active ? 'mvPlayerListItem active' : 'mvPlayerListItem';
        return (
            <Link
                style={{ textDecoration: "none", color: "white"}}
                to={{
                    pathname:`/player/${this.props.id}`
                }}
            >
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">{this.props.number}</div>
                    <div className="mvPlayerListItem--title">{this.props.title}</div>
                    <div className="mvPlayerListItem--time">{this.props.duration}</div>
                </div>
                <div className="mvPlayerListItem--divider" />
            </Link>
        )
    }
}

export { MvPlayerListItem };