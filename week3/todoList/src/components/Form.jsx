import React, {useState} from 'react';

const Form = ({todoArray, setTodoArray}) => {

    const [text, setText] = useState("");

    const newTodoItemHandler = e => {
        e.preventDefault();
        const newListItem = {
            id: Math.floor(Math.random() * 10000),
            text,
            isCompleted: false
        }
        setTodoArray( [...todoArray, newListItem]);
        setText("");
    }
    return(
        <form onSubmit={newTodoItemHandler}>
            <input type="text" value={text} onChange={ e => setText(e.target.value) }/>
            <button>Add</button>
        </form>
    );
}

export default Form;