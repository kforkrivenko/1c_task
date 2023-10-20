import React, {useState} from "react";
import './CharacterForm.css'

export const AddCharacter = ({ onAddCharacter }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [date, setDate] = useState();

    const formRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddCharacter({ name, image, x, y, date });
        setName('');
        setImage('');
        setX(0);
        setY(0);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="form_add" onSubmit={handleSubmit}>
            <div className="name"> Добавить нового участника </div>
            <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="photo">Фотография</label>
                <input type="file" name="photo" accept="image/*"
                       onChange={(e) => {
                           setImage(URL.createObjectURL(e.target.files[0]));
                       }}/>
            </div>
            <div className="form-group">
                <label htmlFor="location">Координата по X</label>
                <input type="text" id="X" name="x" value={x} onChange={(e) => setX(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="location">Координата по Y</label>
                <input type="text" id="Y" name="y" value={y} onChange={(e) => setY(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="date">Дата</label>
                <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button type="submit">Добавить</button>
        </form>
        );
};
