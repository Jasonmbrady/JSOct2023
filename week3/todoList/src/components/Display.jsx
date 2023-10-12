import React from 'react';

const Display = ({todoArray, setTodoArray}) => {

    const checkChangeHandler = e => {
        e.preventDefault();
        // iterate through todos
        // return todo that exists if id !== checkbox id
        // return todo with opposite boolean for isComplete
        // change textDecoration style of this todo list item to line-through OR, if already line-through, change to none

    }

    const deleteClickHandler = e => {
        e.preventDefault();
        // iterate through todos, use .filter() to remove todo whose id === id on delete button
        // setTodoArray to filteredTodoArray
    }
    return(
        <ul>
            {
                todoArray.map( todo =>{
                    return(
                        <li key={todo.id}><span style={{textDecoration: "line-through"}}>{todo.text}</span>  <input type="checkbox" checked={todo.isComplete} onChange={checkChangeHandler}/> <button onClick={deleteClickHandler} id={todo.id}>Delete</button></li>
                    )
                })
            }
        </ul>
    );
}

export default Display;