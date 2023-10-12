import React, {useState} from 'react';

const BoxForm = ({boxArray, setBoxArray}) => {

    const [color, setColor] = useState("");

    const newBoxHandler = e => {
        e.preventDefault();
        const newBox = {
            id: Math.floor(Math.random() * 10000),
            color,
            size: 100
        }
        setBoxArray([...boxArray, newBox]);
        // const updatedBoxArray = [...boxArray, newBox]
        // setBoxArray(updatedBoxArray)
        setColor("");
    }
    return(
        <form onSubmit={newBoxHandler}>
            <label>Color: </label>
            <input type="text" value={color} onChange={ e => setColor(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}

export default BoxForm;