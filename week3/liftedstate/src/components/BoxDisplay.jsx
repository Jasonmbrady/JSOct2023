import React from 'react';

const BoxDisplay = ({boxArray}) => {
    return(
        <div>
            {
                boxArray.map( box =>{
                    return (
                        <div key={box.id}style={{background: box.color, width: box.size, height: box.size, margin: 5, display: 'inline-block'}}></div>
                    )
                })
            }
        </div>
    );
}

export default BoxDisplay;