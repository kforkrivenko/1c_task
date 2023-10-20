import React from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import "./MapComponent.css"

const Character = ({ character }) => (
    <Draggable defaultPosition={{x: Number(character.x), y: Number(character.y)}}>
        <div className="character">
            <p>{character.name}: {character.date}</p>
            <img className="avatar" src={character.image} alt={character.name} />
        </div>
    </Draggable>
);

export function Map(props) {
    const { characters } = props;
    const [coordinates, setCoordinates] = useState({x: 0, y: 0});

    const handleMouseMove = (event) => {
        setCoordinates({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };

    return (
        <div className="map" onMouseMove={handleMouseMove}>
            <p style={{ position: 'absolute', bottom: 0, left: 0 }}>
                X: {coordinates.x}, Y: {coordinates.y}
            </p>
            {characters.map((character, index) =>
                <Character key={index} character={character}/>
            )}
        </div>
    );
}
