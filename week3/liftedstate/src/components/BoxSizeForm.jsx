import React, {useState} from 'react';

const BoxSizeForm = ({boxArray, setBoxArray}) => {

    const [size, setSize] = useState(100);

    const boxSizeHandler = e => {
        e.preventDefault();
        const updatedArray = [];
        for (let i = 0; i < boxArray.length; i++){
            const box = {...boxArray[i]};
            box.size = size;
            updatedArray.push(box);
        }
        setBoxArray(updatedArray);
    }
    return(
        <form onSubmit={boxSizeHandler}>
            <label>Size: </label>
            <input type="text" value={size} onChange={ e => setSize(e.target.value)}/>
            <button>Update</button>
        </form>
    )
}

export default BoxSizeForm;