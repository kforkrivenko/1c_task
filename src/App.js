import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Map } from './Components/MapComponent/MapComponent'
import { AddCharacter } from './Components/CharacterForm/AddCharacter'
import "./App.css"



const App = () => {
    const [characters, setCharacters] = useState([]);

    const handleAddCharacter = (character) => {
        setCharacters((prevCharacters) => [...prevCharacters, character]);
    };

    return (
        <div className="app">
            <div className="title_">Моя карта персонажей</div>
            <Map characters={characters} />
            <AddCharacter onAddCharacter={handleAddCharacter} />
        </div>
    );
};

export default App;
