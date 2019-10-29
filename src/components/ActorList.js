import React from 'react';

import { Actor } from './index';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import '../css/ActorList.css';

const ActorList = props => {
    const renderActor = () => {
        return props.actors.map((actor, i) => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${actor.profile_path}`;
            return (
                <Actor 
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                    hover={false}
                />
            )
        })
    }
    return (
        <div className="actorList">
            <h3 className="actorList--title"> ACTEURS </h3>
            <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}

export { ActorList };