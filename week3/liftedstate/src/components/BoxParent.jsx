import React, {useState} from 'react';
import BoxDisplay from './BoxDisplay';
import BoxForm from './BoxForm';
import BoxSizeForm from './BoxSizeForm';


const BoxParent = (props) => {

    const [boxArray, setBoxArray] = useState([]);

    return(
        <div>
            <BoxForm boxArray={boxArray} setBoxArray={setBoxArray}/>
            <BoxSizeForm boxArray={boxArray} setBoxArray={setBoxArray}/>
            <BoxDisplay boxArray={boxArray}/>
        </div>
    );
}

export default BoxParent;