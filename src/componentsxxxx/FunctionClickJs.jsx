import React from 'react';

const FunctionClickJs = () => {

    function clickHandler(){
        alert('click')
    }

    return (
        <div>
            <button onClick={clickHandler} >Click</button>
        </div>
    );
};

export default FunctionClickJs;